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
        <el-button
          type="danger"
          @click="deleteHandle()"
          v-if="isAuth('admin:user:delete')"
          size="small"
        >批量删除</el-button>
        <input type="file" id="wuliuid" @change="importf(this)" style="display:none;" />
      </template>

      <template slot-scope="scope" slot="sex">
        <el-tag v-if="scope.row.sex === 'F'" size="mini" type="danger">女</el-tag>
        <el-tag v-else size="mini">男</el-tag>
      </template>

      <template slot-scope="scope" slot="isVip">
        <el-tag v-if="scope.row.isVip === 0" size="mini" type="danger">不是</el-tag>
        <el-tag v-else size="mini">是</el-tag>
      </template>

      <template slot-scope="scope" slot="pic">
        <img :src="'http://localhost:8013'+scope.row.pic" alt />
      </template>

      <template slot-scope="scope" slot="status">
        <el-tag v-if="scope.row.status === 0" size="mini" type="danger">禁用</el-tag>
        <el-tag v-else size="mini">正常</el-tag>
      </template>

      <template slot-scope="scope" slot="menu">
        <el-button style="height:33px;" type="success" icon="el-icon-s-order" size="small" @click.stop="addOrUpdateHandle(scope.row.userId,1)">查看</el-button>

        <el-button
          type="primary"
          icon="el-icon-edit"
          size="small"
          v-if="isAuth('admin:user:update')"
          @click.stop="addOrUpdateHandle(scope.row.userId,2)"
        >编辑</el-button>

        <el-button
          type="danger"
          icon="el-icon-delete"
          size="small"
          v-if="isAuth('admin:user:delete')"
          @click.stop="deleteHandle(scope.row.userId)"
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
import { tableOption } from "@/crud/user/user";
import AddOrUpdate from "./user-add-or-update";
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
        url: this.$http.adornUrl("/admin/user/page"),
        method: "get"
      }).then(({ data }) => {
        console.log(data);
        this.dataList = data.records;
        // this.page.total = data.total;
        // this.dataListLoading = false;
      });
    },
    addcoupon(id) {
      console.log(id);
      this.dialogVisible1 = true;
      this.coupon.uid = id;
      // this.$http({
      //   url: this.$http.adornUrl("/admin/coupon/page"),
      //   method: "GET"
      // }).then(({ data }) => {
      //   this.options = data;
      // });
    },
    // 新增 / 修改
    addOrUpdateHandle(id, type) {
      console.log(type);
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
            return item.userId;
          });
      this.$confirm(`确定进行[${id ? "删除" : "批量删除"}]操作?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http({
            url: this.$http.adornUrl("/admin/user"),
            method: "delete",
            data: {
              userIds:ids
            }
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
    },
    importlist(i) {
      let that = this;
      let arr = [];
      this.filename = "";
      switch (i) {
        case 1:
          for (let i = 0; i < that.importli.length; i++) {
            if (!that.importli[i]["员工工号"]) {
              this.$message.error("找不到员工工号列, 或数据格式错误");
              setTimeout(() => {
                window.location.reload();
              }, 500);
              return false;
            }

            if (!that.importli[i]["积分值"]) {
              this.$message.error("找不到积分值列, 或数据格式错误");
              setTimeout(() => {
                window.location.reload();
              }, 500);
              return false;
            }

            let da = {
              score: that.importli[i]["积分值"].replace("积分", "").trim(),
              userCode: that.importli[i]["员工工号"].trim()
            };
            arr.push(da);
          }

          that
            .$http({
              url: that.$http.adornUrl("/admin/score/import"),
              method: "post",
              data: arr
            })
            .then(({ data }) => {
              this.$message({
                message: "积分导入成功",
                type: "success"
              });
              setTimeout(() => {
                window.location.reload();
              }, 200);
            })
            .catch(err => {
              console.log(err);
            });

          break;
        case 2:
          for (let i = 0; i < that.importli.length; i++) {
            if (!that.importli[i]["员工工号"]) {
              this.$message.error("找不到员工工号列, 或数据格式错误");
              setTimeout(() => {
                window.location.reload();
              }, 500);
              return false;
            }

            if (!that.importli[i]["5%折扣券（张数）"]) {
              this.$message.error("找不到5%折扣券（张数）列, 或数据格式错误");
              setTimeout(() => {
                window.location.reload();
              }, 500);
              return false;
            }

            let da = {
              count: that.importli[i]["5%折扣券（张数）"],
              userCode: that.importli[i]["员工工号"]
            };

            arr.push(da);
          }

          that
            .$http({
              url: that.$http.adornUrl("/admin/coupon/import"),
              method: "post",
              data: arr
            })
            .then(({ data }) => {
              this.$message({
                message: "优惠券导入成功",
                type: "success"
              });
              window.location.reload();
            });

          that.dialogVisible6 = false;
          that.dialogVisible5 = false;

          break;
        case 3:
          break;

        default:
          break;
      }
    },
    derive(ind) {
      console.log("导出");
      var that = this;
      var str = "";
      var blob;
      switch (ind) {
        case 0:
          that
            .$http({
              url: that.$http.adornUrl("/output/all"),
              method: "get"
            })
            .then(({ data }) => {
              for (let i = 0; i < data.length; i++) {
                for (let key in data[i]) {
                  str += data[i][key] + "\t";
                }
                str += "\n";
              }
              callback(str, "全部用户记录");
            });
          break;
        case 1:
          that
            .$http({
              url: that.$http.adornUrl("/output/score/" + this.userid),
              method: "get"
            })
            .then(({ data }) => {
              for (let i = 0; i < data.length; i++) {
                for (let key in data[i]) {
                  str += data[i][key] + "\t";
                }
                str += "\n";
              }
              callback(str, "个人钱包记录");
            });
          break;
        case 2:
          that
            .$http({
              url: that.$http.adornUrl("/output/coupon/" + this.userid),
              method: "get"
            })
            .then(({ data }) => {
              for (let i = 0; i < data.length; i++) {
                for (let key in data[i]) {
                  str += data[i][key] + "\t";
                }
                str += "\n";
              }
              callback(str, "个人优惠券记录");
            });
          break;

        default:
          break;
      }

      function callback(data, txt) {
        var blob = new Blob([data], {
          type:
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
          //"application/octet-stream"
        });
        const fileName = txt + ".xls";
        const elink = document.createElement("a");
        elink.href = URL.createObjectURL(blob);
        if ("download" in elink) {
          // 非IE下载
          elink.download = fileName;
          elink.style.display = "none";
          elink.href = URL.createObjectURL(blob);
          document.body.appendChild(elink);
          elink.click();
          URL.revokeObjectURL(elink.href); // 释放URL 对象
          document.body.removeChild(elink);
        } else {
          // IE10+下载
          navigator.msSaveBlob(blob, fileName);
        }
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
