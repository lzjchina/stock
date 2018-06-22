<template>
  <div class="Certification">
    <Header propRouternum="99"></Header>
    <div class="Certification_main">
      <div class="Certification_box">
        <h3 class="Certification_title">资质认证</h3>
        <!-- 输入区域 -->
        <ul class="Certification_inputArea">
          <li>
            <h4 class="Certification_inputNames"><span class="Certification_redStart">*</span>公司全称</h4>
            <input class="Certification_oneInput" type="text" name="companyName" placeholder="请填写公司的工商登记名称，例如：深圳股王金来网络有限公司" v-model="CertificationMsg.companyName"/>
          </li>
          <li>
            <h4 class="Certification_inputNames"><span class="Certification_redStart">*</span>证件类型</h4>
            <div class="Certification_inputCertificationTypeBox">
              <select v-model="CertificationMsg.cardType.selectCardName" class="Certification_inputCertificationType">
                <option v-for="(items, index) in CertificationTypes" :value="items.name" :key="index">{{items.name}}</option>
                }
              </select>
              <div class="Certification_inputCertificationTypeNames">
                <input type="text" name="companyName" placeholder="请输入11位证件号码哦" v-model="CertificationMsg.cardType.selectCardNum"/>
                <img src="static/images/logos/search.png" alt="" class="Certification_tipLogo1">
                <p>请准确填写，如有填写错误，将会影响后续等业务</p>
              </div>
            </div>
          </li>
          <li>
            <h4 class="Certification_inputNames">真实姓名</h4>
            <input class="Certification_oneInput" type="text" name="companyName" placeholder="请填写真实姓名" v-model="CertificationMsg.OwnerName"/>
          </li>
          <li>
            <h4 class="Certification_inputNames">办公地址</h4>
            <select v-model="CertificationMsg.workLocal.selectwPosition" class="Certification_inputCertificationType">
              <option v-for="(items, index) in workPosition" :value="items.wPosition" :key="index">{{items.wPosition}}</option>
              }
            </select>
            <input type="text" name="companyName" placeholder="详细地址（选填）" class="Certification_companyName" v-model="CertificationMsg.workLocal.selectwPositionDetails"/>
          </li>
          <li>
            <h4 class="Certification_inputNames">邮箱</h4>
            <input class="Certification_oneInput" type="text" name="email" placeholder="请填写常用邮箱" v-model="CertificationMsg.email"/>
          </li>
          <li>
            <h4 class="Certification_inputNames">微信号</h4>
            <input class="Certification_oneInput" type="text" name="companyName" placeholder="请输入微信号，注意不是微信昵称哦" v-model="CertificationMsg.wechat"/>
          </li>
          <li style="margin-top: 0;">
            <div class="Certification_readAgree">
              <div @click="click_agree">
                <img src="../../assets/gou.png" v-if="isAgree" />
              </div>
              <span>我已同意并阅读</span>
              <b>《用户协议》</b>
            </div>
            <button class="Certification_saveBtn" @click="getCertificationMsg">完成</button>
          </li>
        </ul>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../Common/Header'
import Footer from '../Common/Footer'
export default {
  name: 'Certification',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      isAgree: true,
      msg: 'Certification',
      CertificationMsg: {
        companyName: '',
        cardType: {
          selectCardNum: '',
          selectCardName: '身份证'
        },
        workLocal: {
          selectwPosition: '深圳',
          selectwPositionDetails: ''
        },
        OwnerName: '',
        email: '',
        wechat: ''
      },
      CertificationTypes: [
        {
          name: '身份证'
        },
        {
          name: '驾驶证'
        },
        {
          name: '护照'
        },
        {
          name: '学生证'
        }
      ],
      workPosition: [
        {
          wPosition: '深圳'
        },
        {
          wPosition: '广州'
        },
        {
          wPosition: '北京'
        },
        {
          wPosition: '上海'
        },
        {
          wPosition: '杭州'
        },
        {
          wPosition: '广西'
        }
      ],
      visitorMsg: {
        isSuccess: true,
        imgUrl: 'static/images/logos/search.png'
      }
    }
  },
  methods: {
    getCertificationMsg: function () {
      if (this.isAgree) {
        console.log(this.CertificationMsg)
        this.$store.commit('newVisitor', this.visitorMsg)
        this.$store.commit('emitisShowCheckIn', false)
        this.$router.push('/')
      }
    },
    click_agree: function () {
      this.isAgree = !this.isAgree
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Certification_main {
  margin-top: 80px;
  background: #F3F3F3;
  padding: 10px 0 20px 0;
}
.Certification_box {
  width: 1100px;
  background: #fff;
  padding: 0 50px 96px 50px;
  margin: 0 auto;
}
.Certification_title {
  width: 1100px;
  text-align: left;
  height: 68px;
  line-height: 68px;
  border-bottom: 1px solid #D7D7D7;
  font-size: 18px;
  color: #222;
  margin-bottom: 7px;
}
.Certification_inputArea {
  width: 700px;
  margin-left: 250px;
}
.Certification_inputArea li {
  width: 100%;
  margin-top: 40px;
}
.Certification_inputNames {
  font-size: 14px;
  color: #222222;
  margin-bottom: 20px;
}
.Certification_oneInput {
  width: 678px;
  padding-left: 22px;
  height: 40px;
  border: 1px solid #B8B8B8;
  font-size: 14px;
  color: #B1B1B1;
  line-height: 40px;
  border-radius: 4px;
}
.Certification_inputCertificationType {
  width: 238px;
  height: 40px;
  border: 1px solid #B8B8B8;
  padding-left: 12px;
  line-height: 40px;
  color: #222;
  font-size: 14px;
  border-radius: 4px;
}
.Certification_inputCertificationTypeBox {
  display: flex;
}
.Certification_inputCertificationTypeNames {
  margin-left: 20px;
  position: relative;
}
.Certification_inputCertificationTypeNames input, .Certification_companyName {
  width: 402px;
  height: 40px;
  padding: 0 28px 0 10px;
  line-height: 40px;
  font-size: 14px;
  border: 1px solid #B8B8B8;
  color: #ccc;
  border-radius: 4px;
}
.Certification_companyName {
  margin-left: 16px;
}
.Certification_inputCertificationTypeNames p {
  font-size: 14px;
  color: #F05858;
  margin-top: 11px;
}
.Certification_tipLogo1 {
  width: 16px;
  height: 16px;
  top: 12px;
  right: 12px;
  position: absolute;
}
.Certification_saveBtn {
  width: 160px !important;
  height: 40px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 4px;
  background: #C79C37;
  line-height: 40px;
  text-align: center;
  color: #fff;
  border: 0;
  border: none;
  outline: none;
}
.Certification_redStart {
  font-size: 14px;
  color: #E92020;
}
.Certification_readAgree {
  display: flex;
  cursor: pointer;
  padding: 21px 0;
}
.Certification_readAgree div {
  width: 16px;
  height: 16px;
  background: #C79C37;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 7px;
}
.Certification_readAgree span {
  font-size: 14px;
  color: #999;
}
.Certification_readAgree b {
  font-size: 14px;
  color: #FF7112;
}
</style>
