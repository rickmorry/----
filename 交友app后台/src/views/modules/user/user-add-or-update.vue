<template>
  <el-dialog
    :title="dataForm.userId==null ? '新增' : '修改'"
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
      <el-form-item label="用户头像" prop="pic">
        <img :src="dataForm.pic" class="image" style="width:50px;height:50px;" />
      </el-form-item>
      <!-- <el-form-item label="照片墙" prop="img">
        <el-upload
          action
          :class="{hide: hideUpload}"
          :http-request="uploadScreenShot"
          list-type="picture-card"
          :limit="1"
          :file-list="dataForm.showPics"
          disabled
        >
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>-->
      <el-form-item label="用户名" prop="nickName">
        <el-input v-model="dataForm.nickName" :disabled="disabled" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="dataForm.sex" :disabled="disabled">
          <el-radio label="F">女</el-radio>
          <el-radio label="M">男</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="dataForm.age" placeholder="18" :disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item label="用户余额" prop="diamondNum">
        <el-input v-model="dataForm.diamondNum" placeholder="用户余额" :disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item label="身高" prop="height">
        <el-input v-model="dataForm.height" placeholder="身高" :disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item label="体重" prop="weight">
        <el-input v-model="dataForm.weight" placeholder="体重" :disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item label="会员状态" prop="couponCount">
        <el-radio-group v-model="dataForm.isVip" :disabled="disabled">
          <el-radio :label="0">不是</el-radio>
          <el-radio :label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="状态" size="mini" prop="status">
        <el-radio-group v-model="dataForm.status" :disabled="disabled">
          <el-radio :label="0">禁用</el-radio>
          <el-radio :label="1">正常</el-radio>
        </el-radio-group>
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
      dataForm: {},
      label: 0,
      projectScreenShot: [], // 项目截图 - 用于存储url
      dialogImageUrl:
        "https://img2.baidu.com/it/u=2440383271,580821832&fm=26&fmt=auto&gp=0.jpg", // 项目截图 - 图片的url
      dialogImageUrlArray: [
        {
          url:
            "https://img2.baidu.com/it/u=2440383271,580821832&fm=26&fmt=auto&gp=0.jpg"
        },
        {
          url:
            "https://img2.baidu.com/it/u=2440383271,580821832&fm=26&fmt=auto&gp=0.jpg"
        },
        {
          url:
            "https://img2.baidu.com/it/u=2440383271,580821832&fm=26&fmt=auto&gp=0.jpg"
        },
        {
          url:
            "https://img2.baidu.com/it/u=2440383271,580821832&fm=26&fmt=auto&gp=0.jpg"
        }
      ], // 项目截图 - 图片的url
      hideUpload: false, // 项目截图：是否隐藏上传按钮
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
          url: this.$http.adornUrl(`/admin/user/info/${this.dataForm.userId}`),
          method: "get",
          params: this.$http.adornParams()
        }).then(({ data }) => {
          this.dataForm = data;
        });
      }
    },
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
            url: this.$http.adornUrl(`/admin/user`),
            method: this.dataForm.userId ? "put" : "post",
            data: this.$http.adornData({
              userId: this.dataForm.userId,
              nickName: this.dataForm.nickName,
              sex: this.dataForm.sex,
              age: this.dataForm.age,
              diamondNum: this.dataForm.diamondNum,
              height: this.dataForm.height,
              weight: this.dataForm.weight,
              isVip: this.dataForm.isVip,
              status: this.dataForm.status
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
