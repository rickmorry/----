<template>
  <div class="mod-user">
    <avue-crud
      ref="crud"
      :page="page"
      :data="dataList"
      :option="tableOption"
      @search-change="searchChange"
      @selection-change="selectionChange"
      @on-load="getDataList"
    >
      <template slot="menuLeft">
        <el-button type="primary" @click="addOrUpdateHandle()" size="small">添加</el-button>
        <el-button
          type="danger"
          @click="deleteHandle()"
          v-if="isAuth('admin:user:delete')"
          size="small"
        >批量删除</el-button>
        <input type="file" id="wuliuid" @change="importf(this)" style="display:none;" />
      </template>

      <template slot-scope="scope" slot="menu">
        <el-button
          type="success"
          icon="el-icon-edit"
          size="small"
          v-if="isAuth('admin:user:update')"
          @click.stop="addOrUpdateHandle(scope.row.id,1)"
        >详情</el-button>
        <el-button
          type="primary"
          icon="el-icon-edit"
          size="small"
          v-if="isAuth('admin:user:update')"
          @click.stop="addOrUpdateHandle(scope.row.id,2)"
        >编辑</el-button>

        <el-button
          type="danger"
          icon="el-icon-delete"
          size="small"
          v-if="isAuth('admin:user:delete')"
          @click.stop="deleteHandle(scope.row.id)"
        >删除</el-button>
      </template>
    </avue-crud>

    <!-- 弹窗, 新增 / 修改 -->
    <add-or-update v-if="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="getDataList"></add-or-update>

    <el-dialog title :visible.sync="dialogVisible6" width="30%">
      <div>操作执行中,请稍等</div>
    </el-dialog>
  </div>
</template>
<script>
import { tableOption } from "@/crud/vip/recharge";
import AddOrUpdate from "./recharge-add-or-update";
export default {
  data() {
    return {
      filename: null,
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false,
      dialogVisible4: false,
      dialogVisible5: false,
      dialogVisible6: false,
      dataList: [],
      dataListLoading: false,
      dataListSelections: [],
      addOrUpdateVisible: false,
      tableOption: tableOption,
      page: {
        total: 0, // 总页数
        currentPage: 1, // 当前页数
        pageSize: 10 // 每页显示多少条
      },
      options: [],
      integralli: [
        {
          id: 0,
          name: null
        }
      ],
      coupon: {
        couponCount: null,
        uid: null
      },
      couponli: [],
      importli: [],
      fullscreenLoading: false,
      userid: ""
    };
  },
  components: {
    AddOrUpdate
  },
  methods: {
    // 获取数据列表
    getDataList(page, params) {
      this.dataListLoading = true;
      // console.log(params);
      // console.log(page);

      this.$http({
        url: this.$http.adornUrl("/recharge-package/page"),
        method: "get"
      }).then(({ data }) => {
        this.dataList = data.records;
        this.page.total = data.total;
        this.dataListLoading = false;
      });
    },
    // 新增 / 修改
    addOrUpdateHandle(id = null, type = null) {

      this.addOrUpdateVisible = true;
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(id, type);
      });
    },
    integrallist(id, type) {
      console.log(type);
      this.addOrUpdateVisible = true;
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(id, type);
      });
    },
    //详情
    // 删除
    deleteHandle(id) {
      var ids = id
        ? [id]
        : this.dataListSelections.map(item => {
            return item.id;
          });
      this.$confirm(`确定进行[${id ? "删除" : "批量删除"}]操作?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http({
            url: this.$http.adornUrl("/recharge-package"),
            method: "delete",
            data: this.$http.adornData(ids, false)
          }).then(({ data }) => {
            this.$message({
              message: "操作成功",
              type: "success",
              duration: 1500,
              onClose: () => {
                this.getDataList(this.page);
              }
            });
          });
        })
        .catch(() => {});
    },
    // 条件查询
    searchChange(params) {
      this.getDataList(this.page, params);
    },
    // 多选变化
    selectionChange(val) {
      this.dataListSelections = val;
    },
    submityouhui() {
      this.coupon.couponCount = parseInt(this.coupon.couponCount);
      this.$http({
        url: this.$http.adornUrl(
          "/admin/coupon/send?uid=" +
            this.coupon.uid +
            "&couponCount=" +
            this.coupon.couponCount
        ),
        method: "post",
        data: this.coupon
      }).then(({ data }) => {
        this.coupon = {
          couponCount: null,
          uid: null
        };
      });
    },
    getwuliuinfo() {
      let inpfile = document.getElementById("wuliuid").click();
    },
    importf() {
      /*
     FileReader共有4种读取方法：
     1.readAsArrayBuffer(file)：将文件读取为ArrayBuffer。
     2.readAsBinaryString(file)：将文件读取为二进制字符串
     3.readAsDataURL(file)：将文件读取为Data URL
     4.readAsText(file, [encoding])：将文件读取为文本，encoding缺省值为'UTF-8'
     */
      let that = this;
      var obj = document.getElementById("wuliuid");
      console.log(obj);
      this.filename = obj.files[0].name;
      //导入
      if (!obj.files) {
        return;
      }
      var f = obj.files[0];
      var reader = new FileReader();
      reader.onload = function(e) {
        var data = e.target.result;
        if (rABS) {
          wb = XLSX.read(btoa(fixdata(data)), {
            //手动转化
            type: "base64"
          });
        } else {
          wb = XLSX.read(data, {
            type: "binary"
          });
        }
        //wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
        //wb.Sheets[Sheet名]获取第一个Sheet的数据
        console.log(XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]));

        that.importli = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
      };
      var wb; //读取完成的数据
      var rABS = false; //是否将文件读取为二进制字符串

      function fixdata(data) {
        //文件流转BinaryString
        var o = "",
          l = 0,
          w = 10240;
        for (; l < data.byteLength / w; ++l)
          o += String.fromCharCode.apply(
            null,
            new Uint8Array(data.slice(l * w, l * w + w))
          );
        o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
        return o;
      }
      if (rABS) {
        reader.readAsArrayBuffer(f);
      } else {
        reader.readAsBinaryString(f);
      }
    }
  },
  mounted() {}
};
</script>
<style>
.integralcon {
  display: flex;
  flex-direction: column;
  height: 70px;
  line-height: 70px;
  padding: 5px;
  border-bottom: solid 1px #f9f9f9;
}
.integralcon .tit {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  line-height: 30px;
}
.integralcon .tit .red {
  color: #ff0000;
}
.integralcon .tit .green {
  color: #00ff00;
}
.integralcon .con {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  line-height: 30px;
}
.integralcon .con .right {
  font-weight: 600;
  font-size: 18px;
}

.couponcon {
  display: flex;
  flex-direction: column;
  height: 70px;
  line-height: 70px;
  padding: 5px;
  border-bottom: solid 1px #f9f9f9;
}
.couponcon .tit {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  line-height: 30px;
}
.couponcon .tit .red {
  color: #ff0000;
}
.couponcon .tit .green {
  color: #00ff00;
}
.couponcon .tit .gray {
  color: #909399;
}
</style>
