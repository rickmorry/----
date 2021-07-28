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
      <el-form-item label="用户昵称" prop="nickName">
        <el-input v-model="dataForm.nickName" :disabled="look" placeholder="用户昵称"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="score">
        <el-input v-model="dataForm.age" :disabled="look" placeholder="用户年龄"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="score">
        <el-input v-model="dataForm.sex=='F'?'女':'男'" :disabled="look" placeholder="用户性别"></el-input>
      </el-form-item>
      <el-form-item label="身高" prop="score">
        <el-input v-model="dataForm.height" :disabled="look" placeholder="身高"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="score">
        <el-select v-model="dataForm.status" :disabled="look" @change="toggle" placeholder="状态">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>

      </el-form-item>
      <el-form-item label="自我介绍" prop="score">
        <el-input v-model="dataForm.introduction" :disabled="look" placeholder="自我介绍"></el-input>
      </el-form-item>
      <el-form-item label="体重" prop="score">
        <el-input v-model="dataForm.weight" :disabled="look" placeholder="体重"></el-input>
      </el-form-item>
      <el-form-item label="微信号" prop="score">
        <el-input v-model="dataForm.wxId" :disabled="look" placeholder="微信号"></el-input>
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
          label: "无效",
          value: 0
        },
        {
          label: "正常",
          value: 1
        },
        {
          label: "待审核",
          value: 2
        }
      ],
      look: false
    };
  },
  methods: {
    toggle(e){
      this.dataForm.status=e
    },
    init(id, type) {
      if (type == false) this.look = true;
      else this.look = false;
      this.dataForm.userId = id || 0;
      this.visible = true;
      console.log(this.dataForm.userId);

      this.$nextTick(() => {
        this.$refs.dataForm.resetFields();
      });
      if (this.dataForm.userId) {
        this.$http({
          url: this.$http.adornUrl(
            `/admin/user-register/info/${this.dataForm.userId}`
          ),
          method: "get",
          params: this.$http.adornParams()
        }).then(({ data }) => {
          this.dataForm = data;
        });
      }
      this.dataForm = {
        id: 0,
        userId: 0,
        nickName: "张三",
        age: 10,
        sex: "女",
        status: parseInt(Math.random() * 3),
        city: "上海",
        longitude: 1000000,
        latitude: 1000000,
        introduce: `歪比巴卜歪比巴卜歪比巴卜歪比巴卜歪比巴卜歪比巴卜歪比巴卜歪比巴卜`
      };
    },
    // 表单提交
    dataFormSubmit() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          this.$http({
            url: this.$http.adornUrl(`/admin/user-register`),
            method:"put",
            data: this.$http.adornData({
              userId: this.dataForm.userId,
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
