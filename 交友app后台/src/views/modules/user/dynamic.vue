<template>
  <div class="mod-user">
    <avue-crud
      ref="crud"
      :page="page"
      :data="dataList"
      :option="dynamic"
      @search-change="searchChange"
      @selection-change="selectionChange"
      @on-load="getData"
    >
      <template slot="menuLeft">
        <el-button type="danger" @click="dialogVisible4 = true" size="small">批量删除</el-button>
      </template>

      <template slot-scope="scope" slot="menu">
        <el-button
          type="success"
          icon="el-icon-check"
          size="small"
          @click.stop="selOrUpdateHandle(scope.row.id)"
        >查看</el-button>

        <el-button
          type="primary"
          icon="el-icon-edit"
          size="small"
          @click.stop="addOrUpdateHandle(scope.row.id)"
        >编辑</el-button>

        <el-button
          type="danger"
          icon="el-icon-delete"
          size="small"
          @click.stop="deleteHandle(scope.row.id)"
        >删除</el-button>
      </template>
    </avue-crud>

    <!-- 弹窗, 新增 / 修改 -->
    <add-or-update v-if="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="dataList"></add-or-update>
    <el-dialog title="动态信息" :visible.sync="dialogVisible" width="50%">
      <div class="el-content">
        <div class="left">
        <h3 class="tit">用户名：{{dongtai.text}}</h3>
        <div class="desc">内容：{{dongtai.content}}</div>
        </div>
        <div class="right" style="margin-right: 100px;" v-for="(item,index) in dongtai.img">
          <img class="img" style="width: 100%;height: 100%;" :src="item" alt="" >
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title :visible.sync="dataListLoading" width="30%">
      <div>操作执行中,请稍等</div>
    </el-dialog>
  </div>
</template>

<script>
import { dynamic } from "@/crud/user/dynamic";
import AddOrUpdate from "./dynamic-add-or-update";
export default {
  data() {
    return {
      filename: null,
      dataList: [],
      dialogVisible: false,
      dataListLoading: false,
      dataListSelections: [],
      addOrUpdateVisible: false,
      dynamic: dynamic,
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
      userid: "",
      dongtai:{img:'',text:'',content:''}
    };
  },
  components: {
    AddOrUpdate
  },
  methods: {
    // 获取数据列表
    getData(page, params) {
      this.dataListLoading = true;
      this.$http({
        url: this.$http.adornUrl("/post-record/page"),
        method: "get",
        params: this.$http.adornParams(
          Object.assign(
            {
              current: page == null ? this.page.currentPage : page.currentPage,
              size: page == null ? this.page.pageSize : page.pageSize
            },
            params
          )
        )
      }).then(({ data }) => {
        console.log(data)
        this.dataList = data.records;
        this.page.total = data.total;
        this.dataListLoading = false;
      });
    },
    selOrUpdateHandle(id) {
      // console.log(id)
      // console.log(this.dataList)
      for (let set of this.dataList){
        // console.log(set)
        if(id === set.id){
          this.dongtai.img = set.pics.split(",")
          this.dongtai.content = set.content
          this.dongtai.text = set.userName
        }
      }
      // console.log(this.dongtai)
      this.dialogVisible=true
    },
    // 新增 / 修改
    addOrUpdateHandle(id) {
      console.log(id);
      this.addOrUpdateVisible = true;
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(id);
      });
    },
    // 删除
    deleteHandle(id) {
      console.log(id)
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
          console.log(this.$http.adornData(ids, false))
          this.$http({
            url: this.$http.adornUrl("/post-record"),
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
.el-content{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.el-content .left{
  width: 100%;
}
.el-content .desc .tit{
  text-align: left;
}
.img{
  width: 100px;
  height: 100px;
}
</style>
