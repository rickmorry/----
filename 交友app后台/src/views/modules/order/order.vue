<template>
  <div class="mod-order-order">
    <el-form
      :inline="true"
      :model="dataForm"
      @keyup.enter.native="getDataList(this.page)"
    >
      <el-form-item>
        <el-input
          v-model="dataForm.orderNumber"
          placeholder="订单编号"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="dataForm.userCode"
          placeholder="员工编号"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="dateRange"
          type="datetimerange"
          range-separator="至"
          value-format="yyyy-MM-dd HH:mm:ss"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <template>
          <el-select
            v-model="dataForm.status"
            clearable
            placeholder="请选择订单状态"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </template>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          icon="el-icon-search"
          size="small"
          @click="getDataList()"
          >查询</el-button
        >
        <el-button
          v-if="isAuth('order:order:waitingConsignmentExcel')"
          @click="showConsignmentInfo()"
          type="primary"
          size="small"
          >导出待发货订单</el-button
        >
        <el-button
          v-if="isAuth('order:order:soldExcel')"
          @click="getSoldExcel()"
          type="primary"
          size="small"
          >导出销售记录</el-button
        >
        <el-button @click="dialogVisible1 = true" type="primary" size="small"
          >导入物流信息</el-button
        >
        <el-button @click="clearDatas()" size="small">清空</el-button>
        <input
          type="file"
          id="wuliuid"
          @change="importf(this)"
          style="display:none;"
        />
      </el-form-item>
    </el-form>
	<!-- 检索 -->
	   <!-- <el-button @click="clearDatas()" size="small"  type="primary">检索</el-button> -->
    <div class="main">
      <div class="content">
        <div class="tit">
          <el-row style="width:100%">
            <el-col :span="10">
              <span class="item product">商品</span>
            </el-col>
            <el-col :span="3">
              <span class="item">成交单价/购买数量</span>
            </el-col>
            <el-col :span="3">
              <span class="item">实付金额</span>
            </el-col>
            <el-col :span="3">
              <span class="item">支付方式</span>
            </el-col>
            <el-col :span="3">
              <span class="item">订单状态</span>
            </el-col>
            <el-col :span="2">
              <span class="item">操作</span>
            </el-col>
          </el-row>
        </div>
        <div class="prod" v-for="order in dataList" :key="order.orderId">
          <div class="prod-tit">
            <span>订单编号：{{ order.orderNumber }}</span>
            <span>下单时间：{{ order.createTime }}</span>
            <!-- <span>买家：19999999999</span>
            <span >联系电话：19999999999</span>-->
          </div>
          <div class="prod-cont">
            <el-row style="width:100%">
              <el-col :span="12">
                <div class="prod-item">
                  <div
                    class="items name"
                    v-for="orderItem in order.orderItems"
                    :key="orderItem.orderItemId"
                  >
                    <div class="prod-image">
                      <img
                        :src="resourcesUrl + orderItem.pic"
                        style="height:100px;width: 100px;"
                      />
                    </div>
                    <div class="prod-name">
                      <span>{{ orderItem.prodName }}</span>
                      <span class="prod-info">{{ orderItem.skuName }}</span>
                    </div>
                    <div class="prod-price">
                      <span>￥{{ orderItem.price }}</span>
                      <span>X{{ orderItem.prodCount }}</span>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="3" style="height: 100%;">
                <div class="item">
                  <div>
                    <span class="totalprice">￥{{ order.actualTotal }}</span>
                    <span v-if="order.freightAmount"
                      >（含运费：￥{{ order.freightAmount }}）</span
                    >
                    <span>共{{ order.productNums }}件</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="3" style="height: 100%;">
                <div class="item">
                  <div>
                    <span v-if="order.payType === 1">微信支付</span>
                    <span v-else-if="order.payType === 2">支付宝</span>
                    <span v-else>手动代付</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="3" style="height: 100%;">
                <div class="item">
                  <span v-if="order.status === 1" size="small" type="danger"
                    >待付款</span
                  >
                  <span
                    v-else-if="order.status === 2"
                    size="small"
                    type="danger"
                    >待发货</span
                  >
                  <span
                    v-else-if="order.status === 3"
                    size="small"
                    type="danger"
                    >待收货</span
                  >
                  <span
                    v-else-if="order.status === 4"
                    size="small"
                    type="danger"
                    >待评价</span
                  >
                  <span
                    v-else-if="order.status === 5"
                    size="small"
                    type="danger"
                    >成功</span
                  >
                  <span v-else size="small">失败</span>
                </div>
              </el-col>
              <el-col :span="3" style="height: 100%;">
                <div class="item">
                  <div class="operate">
                    <!-- <button onclick="">打印订单</button><br> -->
                    <el-button
                      v-if="isAuth('order:order:update')"
                      type="text"
                      size="small"
                      @click="addOrUpdateHandle(order.orderNumber)"
                      >修改</el-button
                    >
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="remark">
            <div class="buyer-remark">
              <span>备注:{{ order.remarks }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-pagination
      @size-change="sizeChangeHandle"
      @current-change="currentChangeHandle"
      :current-page="page.pageIndex"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="page.pageSize"
      :total="page.total"
      layout="total, sizes, prev, pager, next, jumper"
    ></el-pagination>
    <!-- 弹窗, 新增 / 修改 -->
    <add-or-update
      v-if="addOrUpdateVisible"
      ref="addOrUpdate"
      @refreshDataList="getDataList"
    ></add-or-update>
    <consignment-info
      v-if="consignmentInfoVisible"
      ref="consignmentInfo"
      @inputCallback="getWaitingConsignmentExcel"
    ></consignment-info>

    <el-dialog title="导入物流信息" :visible.sync="dialogVisible1" width="30%">
      <div class="demo-input-suffix" style="margin:20px 0;">
        <el-image src="../../../../config/images/pic001.png"></el-image>
      </div>
      <div class="demo-input-suffix">
        <el-button @click="getwuliuinfo()" type="primary" size="small"
          >导入物流信息</el-button
        >
        <label v-show="filename != null">{{ filename }}</label>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          @click="uploadfile(1), (dialogVisible1 = false)"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import AddOrUpdate from "./orderInfo";
import ConsignmentInfo from "./consignment-info";
export default {
  data() {
    return {
      dialogVisible1: false,
      dataForm: {},
      dateRange: [],
      options: [
        {
          value: 1,
          label: "待付款"
        },
        {
          value: 2,
          label: "待发货"
        },
        {
          value: 3,
          label: "待收货"
        },
        {
          value: 4,
          label: "待评价"
        },
        {
          value: 5,
          label: "成功"
        },
        {
          value: 6,
          label: "失败"
        }
      ],
      resourcesUrl: window.SITE_CONFIG.resourcesUrl,
      dataList: [],
      page: {
        total: 0, // 总页数
        currentPage: 1, // 当前页数
        pageSize: 10 // 每页显示多少条
      },
      dataListLoading: false,
      dataListSelections: [],
      addOrUpdateVisible: false,
      consignmentInfoVisible: false,
      filename: null,
      filelist: []
    };
  },
  components: {
    AddOrUpdate,
    ConsignmentInfo
  },
  activated() {
    this.getDataList(this.page);
  },
  methods: {
    // 获取数据列表
    getDataList(page, params) {
      page = page === undefined ? this.page : page;
      this.dataListLoading = true;
      this.$http({
        url: this.$http.adornUrl("/order/order/page"),
        method: "get",
        params: this.$http.adornParams(
          Object.assign(
            {
              userCode:
                this.dataForm.userCode === null ? null : this.dataForm.userCode,
              current: page == null ? this.page.currentPage : page.currentPage,
              size: page == null ? this.page.pageSize : page.pageSize,
              orderNumber:
                this.dataForm.orderNumber === null
                  ? null
                  : this.dataForm.orderNumber,
              status: this.dataForm.status,
              startTime: this.dateRange === null ? null : this.dateRange[0], // 开始时间
              endTime: this.dateRange === null ? null : this.dateRange[1] // 结束时间
            },
            params
          ),
          false
        )
      }).then(({ data }) => {
        this.dataList = data.records;
        this.page.total = data.total;
        this.dataListLoading = false;
      });
    },
    // 清除数据
    clearDatas() {
      this.dataForm = [];
    },
    // 每页数
    sizeChangeHandle(val) {
      this.page.pageSize = val;
      this.page.currentPage = 1;
      this.getDataList(this.page);
    },
    // 当前页
    currentChangeHandle(val) {
      this.page.currentPage = val;
      this.getDataList(this.page);
    },
    // 多选
    selectionChangeHandle(val) {
      this.dataListSelections = val;
    },
    orderStatus() {},
    // 新增 / 修改
    addOrUpdateHandle(val) {
      this.addOrUpdateVisible = true;
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(val);
      });
    },
    // 删除
    deleteHandle(id) {
      var ids = id
        ? [id]
        : this.dataListSelections.map(item => {
            return item.orderId;
          });
      this.$confirm(`确定进行[${id ? "删除" : "批量删除"}]操作?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http({
            url: this.$http.adornUrl(`/prod/spec/${ids}`),
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
    showConsignmentInfo() {
      this.consignmentInfoVisible = true;
      this.$nextTick(() => {
        this.$refs.consignmentInfo.init();
      });
    },
    getWaitingConsignmentExcel(consignmentInfo) {
      this.$http({
        url: this.$http.adornUrl("/order/order/waitingConsignmentExcel"),
        method: "get",
        params: this.$http.adornParams({
          consignmentName: consignmentInfo.consignmentName,
          consignmentMobile: consignmentInfo.consignmentMobile,
          consignmentAddr: consignmentInfo.consignmentAddr,
          startTime: this.dateRange === null ? null : this.dateRange[0], // 开始时间
          endTime: this.dateRange === null ? null : this.dateRange[1] // 结束时间
        }),
        responseType: "blob" // 解决文件下载乱码问题
      }).then(({ data }) => {
        var blob = new Blob([data], {
          type:
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
        });
        const fileName = "待发货信息整理.xls";
        const elink = document.createElement("a");
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
      });
    },
    getSoldExcel() {
      this.$http({
        url: this.$http.adornUrl("/order/order/soldExcel"),
        method: "get",
        params: this.$http.adornParams({
          startTime: this.dateRange === null ? null : this.dateRange[0], // 开始时间
          endTime: this.dateRange === null ? null : this.dateRange[1] // 结束时间
        }),
        responseType: "blob" // 解决文件下载乱码问题
      }).then(({ data }) => {
        var blob = new Blob([data], {
          type:
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
        });
        const fileName = "销售信息整理.xls";
        const elink = document.createElement("a");
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
      });
    },
    getwuliuinfo() {
      let inpfile = document.getElementById("wuliuid").click();

      /*
     FileReader共有4种读取方法：
     1.readAsArrayBuffer(file)：将文件读取为ArrayBuffer。
     2.readAsBinaryString(file)：将文件读取为二进制字符串
     3.readAsDataURL(file)：将文件读取为Data URL
     4.readAsText(file, [encoding])：将文件读取为文本，encoding缺省值为'UTF-8'
     */
    },
    importf() {
      var obj = document.getElementById("wuliuid");
      var that = this;
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

        that.filelist = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
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
    uploadfile(i) {
      let that = this;
      let arr = [];
      switch (i) {
        case 1:
          //导入物流信息

          setTimeout(() => {
            for (let i = 0; i < that.filelist.length; i++) {
              if (!that.filelist[i]["快递公司编码"]) {
            
                this.$message.error('找不到快递公司编码列, 或数据格式错误');
                setTimeout(() => {
                  window.location.reload();
                }, 500);
                return false;
              }
              if (!that.filelist[i]["快递单号"]) {
            
                this.$message.error('找不到快递单号列, 或数据格式错误');
                setTimeout(() => {
                  window.location.reload();
                }, 500);
                return false;
              }

              if (!that.filelist[i]["订单编号"]) {
            
                this.$message.error('找不到订单编号列, 或数据格式错误');
                setTimeout(() => {
                  window.location.reload();
                }, 500);
                return false;
              }


              let da = {
                dvyCode: that.filelist[i]["快递公司编码"].trim(),
                dvyFlowId: that.filelist[i]["快递单号"].trim(),
                orderNumber: that.filelist[i]["订单编号"].trim()
              };
              arr.push(da);
            }
            console.log(this.filelist);
            console.log(arr);
            that
              .$http({
                url: that.$http.adornUrl("/order/order/import/delivery"),
                method: "PUT",
                data: arr
              })
              .then(({ rs }) => {
                this.$message({
                  message: "物流导入成功",
                  type: "success"
                });
                window.location.reload();
              })
              .catch(err => {
                console.log("错误信息");
                setTimeout(() => {
                  window.location.reload();
                }, 500);
              });

            that.dialogVisible6 = false;
            that.dialogVisible4 = false;
          }, 200);
          break;
        case 2:
          break;
        case 3:
          break;

        default:
          break;
      }
    }
  }
};
</script>
<style lang="scss">
.mod-order-order {
  .tit {
    display: flex;
    height: 45px;
    align-items: center;
  }
  .tit .item {
    padding: 0 10px;
    width: 10%;
    text-align: center;
  }
  .tit .product {
    width: 25%;
  }
  .prod-tit {
    padding: 10px;
    background: #f8f8f9;
    border-left: 1px solid #dddee1;
    border-top: 1px solid #dddee1;
    border-right: 1px solid #dddee1;
  }
  .prod-tit span {
    margin-right: 15px;
  }
  .prod-cont {
    display: flex;
    border-top: 1px solid #dddee1;
    border-bottom: 1px solid #dddee1;
    border-left: 1px solid #dddee1;
    color: #495060;
  }
  .prod-cont .item {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    // width: 10%;
    border-right: 1px solid #dddee1;
    text-align: center;
    height: 100%;
  }
  .prod-cont .item span {
    display: block;
  }
  .prod-cont .prod-item {
    // width: 38%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #dddee1;
  }
  .prod-name {
    width: 55%;
    text-align: left;
  }
  .prod-price {
    position: absolute;
    right: 40px;
    text-align: center;
  }
  .prod-price span {
    display: block;
    margin-bottom: 10px;
  }
  .prod-name .prod-info {
    display: block;
    color: #80848f;
    margin-top: 30px;
  }
  .prod-cont .items.name {
    display: flex;
    position: relative;
    padding: 20px;
    // height: 100px;
    border-bottom: 1px solid #dddee1;
  }
  .prod-cont .items.name:last-child {
    border-bottom: none;
  }
  .prod-image {
    margin-right: 20px;
    width: 100px;
    height: 100px;
  }
  .prod-image img {
    width: 100px;
    height: 100px;
  }
  .item span {
    display: block;
    margin-bottom: 10px;
  }
  .item .operate {
    color: #2d8cf0;
  }
  .item .totalprice {
    color: #c00;
  }
  .prod .remark {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #e8f7f6;
    border-left: 1px solid #dddee1;
    border-right: 1px solid #dddee1;
    border-bottom: 1px solid #dddee1;
    margin-bottom: 20px;
  }
  .buyer-remark {
    padding: 0 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
