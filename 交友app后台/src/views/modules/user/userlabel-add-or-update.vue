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
      <el-form-item label="标签名称" prop="nickName">
        <el-input v-model="dataForm.text" :disabled="look" placeholder="标签名称"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="score">
        <el-select v-model="dataForm.status" :disabled="look" placeholder="状态">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="提交时间" prop="couponCount">
        <el-date-picker v-model="dataForm.time" type="date" format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item label="提交人" prop="nickName">
        <el-input v-model="dataForm.nickName" :disabled="look" format="yyyy-MM-dd HH:mm:ss"  placeholder="提交人"></el-input>
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
        label: '未审核',
        value: 0
      }, {
        label: '审核通过',
        value: 1
      }, {
        label: '审核未通过',
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
        id: 0,
        text: "张三",
        status: parseInt(Math.random() * 3),
        time: "2021-06-01 18:00:00",
        nickName:"李四"
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
