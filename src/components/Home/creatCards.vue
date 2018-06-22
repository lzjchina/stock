<template>
  <div class="CreatCards">
    <Header propRouternum="99"></Header>
    <div class="CreatCards_main">
      <div class="CreatCards_box">
        <h3 class="CreatCards_title">创建名片</h3>
        <!-- 输入区域 -->
        <ul class="CreatCards_inputArea">
          <li>
            <h4 class="CreatCards_inputNames">所属公司</h4>
            <input class="CreatCards_oneInput" type="text" name="companyName" placeholder="请填写公司的工商登记名称，例如：深圳股王金来网络有限公司" v-model="cardsMsg.companyName"/>
          </li>
          <li>
            <h4 class="CreatCards_inputNames">证件类型</h4>
            <div class="CreatCards_inputCardsTypeBox">
              <select v-model="cardsMsg.cardType.selectCardName" class="CreatCards_inputCardsType">
                <option v-for="(items, index) in cardsTypes" :value="items.name" :key="index">{{items.name}}</option>
                }
              </select>
              <div class="CreatCards_inputCardsTypeNames">
                <input type="text" name="companyName" placeholder="请输入11位证件号码哦" v-model="cardsMsg.cardType.selectCardNum"/>
                <img src="static/images/logos/search.png" alt="" class="CreatCards_tipLogo1">
                <p>请准确填写，如有填写错误，将会影响后续等业务</p>
              </div>
            </div>
          </li>
          <li>
            <h4 class="CreatCards_inputNames">真实姓名</h4>
            <input class="CreatCards_oneInput" type="text" name="companyName" placeholder="请填写真实姓名" v-model="cardsMsg.OwnerName"/>
          </li>
          <li>
            <h4 class="CreatCards_inputNames">办公地址</h4>
            <select v-model="cardsMsg.workLocal.selectwPosition" class="CreatCards_inputCardsType">
              <option v-for="(items, index) in workPosition" :value="items.wPosition" :key="index">{{items.wPosition}}</option>
              }
            </select>
            <input type="text" name="companyName" placeholder="详细地址（选填）" class="CreatCards_companyName" v-model="cardsMsg.workLocal.selectwPositionDetails"/>
          </li>
          <li>
            <h4 class="CreatCards_inputNames">邮箱</h4>
            <input class="CreatCards_oneInput" type="text" name="email" placeholder="请填写常用邮箱" v-model="cardsMsg.email"/>
          </li>
          <li>
            <h4 class="CreatCards_inputNames">微信号</h4>
            <input class="CreatCards_oneInput" type="text" name="companyName" placeholder="请输入微信号，注意不是微信昵称哦" v-model="cardsMsg.wechat"/>
          </li>
          <li class="CreatCards_saveBtn" @click="getCreatCardsMsg">
            保存或跳过
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
  name: 'CreatCards',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      msg: 'CreatCards',
      cardsMsg: {
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
      cardsTypes: [
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
    getCreatCardsMsg: function () {
      // console.log(this.cardsMsg)
      this.$store.commit('newVisitor', this.visitorMsg)
      this.$store.commit('emitisShowCheckIn', false)
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.CreatCards_main {
  margin-top: 80px;
  background: #F3F3F3;
  padding: 10px 0 20px 0;
}
.CreatCards_box {
  width: 1100px;
  background: #fff;
  padding: 0 50px 96px 50px;
  margin: 0 auto;
}
.CreatCards_title {
  width: 1100px;
  text-align: left;
  height: 68px;
  line-height: 68px;
  border-bottom: 1px solid #D7D7D7;
  font-size: 18px;
  color: #222;
  margin-bottom: 7px;
}
.CreatCards_inputArea {
  width: 700px;
  margin-left: 250px;
}
.CreatCards_inputArea li {
  width: 100%;
  margin-top: 40px;
}
.CreatCards_inputNames {
  font-size: 14px;
  color: #222222;
  margin-bottom: 20px;
}
.CreatCards_oneInput {
  width: 678px;
  padding-left: 22px;
  height: 40px;
  border: 1px solid #B8B8B8;
  font-size: 14px;
  color: #B1B1B1;
  line-height: 40px;
  border-radius: 4px;
}
.CreatCards_inputCardsType {
  width: 238px;
  height: 40px;
  border: 1px solid #B8B8B8;
  padding-left: 12px;
  line-height: 40px;
  color: #222;
  font-size: 14px;
  border-radius: 4px;
}
.CreatCards_inputCardsTypeBox {
  display: flex;
}
.CreatCards_inputCardsTypeNames {
  margin-left: 20px;
  position: relative;
}
.CreatCards_inputCardsTypeNames input, .CreatCards_companyName {
  width: 402px;
  height: 40px;
  padding: 0 28px 0 10px;
  line-height: 40px;
  font-size: 14px;
  border: 1px solid #B8B8B8;
  color: #ccc;
  border-radius: 4px;
}
.CreatCards_companyName {
  margin-left: 16px;
}
.CreatCards_inputCardsTypeNames p {
  font-size: 14px;
  color: #F05858;
  margin-top: 11px;
}
.CreatCards_tipLogo1 {
  width: 16px;
  height: 16px;
  top: 12px;
  right: 12px;
  position: absolute;
}
.CreatCards_saveBtn {
  width: 160px !important;
  height: 40px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 4px;
  background: #C79C37;
  line-height: 40px;
  text-align: center;
  color: #fff;
}
</style>
