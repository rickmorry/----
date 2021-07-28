<template>
  <el-dialog
    :title="!dataForm.userId ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="visible"
  >
    <el-form
      :model="dataForm"
      :rules="dataRule"
      ref="dataForm"
      @keyup.enter.native="dataFormSubmit()"
      label-width="80px"
    >
      <el-form-item label="推荐人" prop="nickName" label-width="120px" label-position="right">
        <el-input v-model="dataForm.nickName" :disabled="look" placeholder="推荐人"></el-input>
      </el-form-item>
      <el-form-item label="被推荐人" prop="score" label-width="120px" label-position="right">
        <el-input v-model="dataForm.bynickName" :disabled="look" placeholder="被推荐人"></el-input>
      </el-form-item>
      <el-form-item label="提交时间" prop="couponCount" label-width="120px" label-position="right">
        <el-date-picker v-model="dataForm.time" type="date" format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item label="被推荐人状态" prop="couponCount" label-width="120px" label-position="right">
        <el-input v-model="dataForm.bystatus" :disabled="look" placeholder="用户状态"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="dataFormSubmit()">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      dataForm: {
        userId: 0,
        nickName: "",
        pic: "",
        status: 1,
        datetime: ""
      },
      page: {
        total: 0, // 总页数
        currentPage: 1, // 当前页数
        pageSize: 10 // 每页显示多少条
      },
      resourcesUrl: window.SITE_CONFIG.resourcesUrl,
      dataRule: {
        nickName: [
          { required: true, message: "用户名不能为空", trigger: "blur" }
        ]
      },
      options: [
        {
          label: "暂时封禁",
          value: 0
        },
        {
          label: "允许",
          value: 1
        },
        {
          label: "永久封禁",
          value: 2
        }
      ],
      look: false
    };
  },
  methods: {
    init(id) {
      this.dataForm.userId = id || 0;
      this.visible = true;
      console.log(this.dataForm.userId);

      this.$nextTick(() => {
        this.$refs.dataForm.resetFields();
      });
      if (this.dataForm.userId) {
        // this.$http({
        //   url: this.$http.adornUrl(`/admin/user/info/${this.dataForm.userId}`),
        //   method: "get",
        //   params: this.$http.adornParams()
        // }).then(({ data }) => {
        //   this.dataForm = data;
        // });
      }
      this.dataForm = {
        userId: 0,
        nickName: "张三",
        bynickName: "被邀请人",
        time: "2021-06-01 18:00:00",
        bystatus: "vip"
      };
    },
    // 表单提交
    dataFormSubmit() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          this.$http({
            url: this.$http.adornUrl(`/admin/user`),
            method: this.dataForm.userId ? "put" : "post",
            data: this.$http.adornData({
              userId: this.dataForm.userId || undefined,
              nickName: this.dataForm.nickName,
              status: this.dataForm.status,
              score: this.dataForm.score,
              couponCount: this.dataForm.couponCount
            })
          }).then(({ data }) => {
            this.$message({
              message: "操作成功",
              type: "success",
              duration: 1500,
              onClose: () => {
                this.visible = false;
                this.$emit("refreshDataList", this.page);
              }
            });
          });
        }
      });
    }
  }
};
</script>
