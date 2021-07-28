<template>
  <div class="mod-user">
    <avue-crud
      ref="crud"
      :page="page"
      :data="dataList"
      :option="accounts"
      @search-change="searchChange"
      @selection-change="selectionChange"
      @on-load="getData"
    >
      <!-- <template slot="menuLeft">
        <el-button type="danger" @click="dialogVisible4 = true" size="small">批量删除</el-button>
      </template> -->

      <template slot-scope="scope" slot="sex">
        <el-tag v-if="scope.row.sex === 'F'" size="mini" type="danger">女</el-tag>
        <el-tag v-else size="mini">男</el-tag>
      </template>

      <template slot-scope="scope" slot="status">
        <el-tag v-if="scope.row.status === 0" size="mini" type="danger">无效</el-tag>
        <el-tag v-else-if="scope.row.status === 1"  type="success" size="mini">正常</el-tag>
        <el-tag v-else size="mini" type="warning">待审核</el-tag>
      </template>

      <template slot-scope="scope" slot="menu">
        <el-button
          type="primary"
          icon="el-icon-edit"
          size="small"
          @click.stop="addOrUpdateHandle(scope.row.userId)"
        >编辑</el-button>
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
import { accounts } from "@/crud/user/accounts";
import AddOrUpdate from "./official-add-or-update";
export default {
  components: {
    AddOrUpdate
  },
  data() {
    return {
      filename: null,
      dataList: [],
      addOrUpdateVisible: false,
      dialogVisible: false,
      dataListLoading: false,
      dataListSelections: [],
      accounts: accounts,
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
  methods: {
    // 获取数据列表
    getData(page, params) {
      this.dataListLoading = true;
      // console.log(params);
      // console.log(page);

      this.$http({
        url: this.$http.adornUrl("/admin/user-register/page"),
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
      });
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
    selOrUpdateHandle(id) {
      console.log(id);

      this.dialogVisible = true;
      this.addOrUpdateVisible = true;
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(id, false);
      });
    },
    // 新增 / 修改
    addOrUpdateHandle(id) {
      console.log(id);
      this.addOrUpdateVisible = true;
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(id, true);
      });
    },
    // 删除
    deleteHandle(id) {},
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
