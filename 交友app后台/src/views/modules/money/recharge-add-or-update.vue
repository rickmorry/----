<template>
  <el-dialog
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
      <el-form-item label="钻石数量" prop="diamondCount">
        <el-input v-model="dataForm.diamondCount" :disabled="disabled" placeholder="钻石数量"></el-input>
      </el-form-item>
      <el-form-item label="套餐名称" prop="name">
        <el-input v-model="dataForm.name" :disabled="disabled" placeholder="套餐名称"></el-input>
      </el-form-item>
      <el-form-item label="套餐价格" prop="price">
        <el-input v-model="dataForm.price" placeholder="套餐价格" :disabled="disabled"></el-input>
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
        diamondCount:null ,
        id: null,
        name: "",
        price: null
      },
      label: 0,
      dialogVisible: false,
      disabled: false,
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
      }
    };
  },
  methods: {
    //编辑
    init(id, type) {
      if (type == 1) {
        this.disabled = true;
      } else {
        this.disabled = false;
      }
      this.dataForm.userId = id || 0;
      this.visible = true;
      this.$nextTick(() => {
        this.$refs.dataForm.resetFields();
      });
      if (this.dataForm.userId) {
        this.$http({
          url: this.$http.adornUrl(`/recharge-package/info/`+id),
          method: "get",
          params: this.$http.adornParams()
        }).then(({ data }) => {
          this.dataForm = data;
          console.log(data);
        });
      }
    },
    uploadScreenShot() {},
    isPic() {},
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 表单提交
    dataFormSubmit() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          this.$http({
            url:this.dataForm.id ? this.$http.adornUrl(`/recharge-package`) : this.$http.adornUrl(`/recharge-package/save`) ,
            method: this.dataForm.id ? "put" : "post",
            data: this.$http.adornData({
              id: this.dataForm.id,
              diamondCount: this.dataForm.diamondCount,
              name: this.dataForm.name,
              price: this.dataForm.price
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
