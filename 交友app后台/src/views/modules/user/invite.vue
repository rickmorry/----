<template>
  <div class="mod-user">
    <avue-crud
      ref="crud"
      :page="page"
      :data="dataList"
      :option="invitedata"
      @search-change="searchChange"
      @selection-change="selectionChange"
      @on-load="getData"
    >
      <template slot="menuLeft">
        <el-button type="danger" @click="dialogVisible4 = true" size="small">批量删除</el-button>
      </template>

      <template slot-scope="scope" slot="menu">
<!--        <el-button-->
<!--          type="primary"-->
<!--          icon="el-icon-edit"-->
<!--          size="small"-->
<!--          @click.stop="addOrUpdateHandle(scope.row.userId)"-->
<!--        >编辑</el-button>-->

<!--        <el-button-->
<!--          type="danger"-->
<!--          icon="el-icon-delete"-->
<!--          size="small"-->
<!--          @click.stop="deleteHandle(scope.row.userId)"-->
<!--        >删除</el-button>-->
      </template>
    </avue-crud>

    <!-- 弹窗, 新增 / 修改 -->
    <add-or-update v-if="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="dataList"></add-or-update>

    <el-dialog title :visible.sync="dataListLoading" width="30%">
      <div>操作执行中,请稍等</div>
    </el-dialog>
  </div>
</template>

<script>
import { invitedata } from "@/crud/user/invite";
import AddOrUpdate from "./invite-add-or-update";
export default {
  data() {
    return {
      filename: null,
      dataList: [],
      dataListLoading: false,
      dataListSelections: [],
      addOrUpdateVisible: false,
      invitedata: invitedata,
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
      userid: ""
    };
  },
  components: {
    AddOrUpdate
  },
  methods: {
    // 获取数据列表
    getData(page, params) {
      this.dataListLoading = true;
      console.log(params);
      console.log(page);

      this.$http({
        url: this.$http.adornUrl("/admin/inv/queryInv"),
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
        this.dataList = data.records;
        this.page.total = data.total;
        this.dataListLoading = false;
        console.log(this.dataList)
      });

      // for (let i = 0; i < 8; i++) {
      //   var data = {
      //     userId: i,
      //     nickName: "张三" + i,
      //     bynickName:"李四"+i,
      //     time: "2021-06-01 18:00:00",
      //     bystatus:parseInt(Math.random()*3)
      //   };
      //   this.dataList.push(data);
      // }
      console.log(this.dataList);

      this.page.total = 10;
      this.dataListLoading = false;
    },
    integrallist(id) {
      this.dialogVisible3 = true;
      this.userid = id;
      this.$http({
        url: this.$http.adornUrl("/admin/score?userId=" + id),
        method: "GET"
      }).then(({ data }) => {
        this.integralli = data;
      });
    },
    // 新增 / 修改
    // addOrUpdateHandle(id) {
    //   console.log(id);
    //   this.addOrUpdateVisible = true;
    //   this.$nextTick(() => {
    //     this.$refs.addOrUpdate.init(id);
    //   });
    // },
    // 删除
    deleteHandle(id) {
      // var ids = id
      //   ? [id]
      //   : this.dataListSelections.map(item => {
      //       return item.userId;
      //     });
      // this.$confirm(`确定进行[${id ? "删除" : "批量删除"}]操作?`, "提示", {
      //   confirmButtonText: "确定",
      //   cancelButtonText: "取消",
      //   type: "warning"
      // })
      //   .then(() => {
      //     this.$http({
      //       url: this.$http.adornUrl("/admin/user"),
      //       method: "delete",
      //       data: this.$http.adornData(ids, false)
      //     }).then(({ data }) => {
      //       this.$message({
      //         message: "操作成功",
      //         type: "success",
      //         duration: 1500,
      //         onClose: () => {
      //           this.getDataList(this.page);
      //         }
      //       });
      //     });
      //   })
      //   .catch(() => {});
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
</style>
