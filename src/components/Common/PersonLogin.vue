<template>
  <div class="personLogin" v-if="getIsShowpersonLogin">
    <ul>
      <li class="personLogin_tagBt">
        <div class="personLogin_tagBtitem" :class="{loginState: PasswordLogin}" @click="clickPasswordLogin">
          密码登录
        </div>
        <div class="personLogin_tagBtitem" :class="{loginState: VerificationCode}" @click="clickVerificationCode">
          验证码登录
        </div>
      </li>
      <li class="personInputMain">
        <!-- 密码登录 -->
        <div v-if="PasswordLogin">
          <div class="inputBox" :class="{borderblue:NameOnFocus}" @click="focusName">
            <label for="personPswName" class="pswNameLogo"></label>
            <input type="tel" name="personPswName" id="personPswName" placeholder="输入手机号/用户名/邮箱" v-model="pswNameNum">
          </div>
          <div class="inputBox" :class="{borderblue:pswOnFocus}" @click="focuspsw">
            <label for="personPsw" class="pswPswLogo"></label>
            <input type="password" name="lastname" id="personPsw" placeholder="密码（6-16字母，数字，空格）" v-model="pswNum">
          </div>
          <input type="button" value="登录" class="loginBtn" @click="clickLogin">
        </div>
        <!-- 验证码登录 -->
        <div v-if="VerificationCode">
          <div class="inputBox" :class="{borderblue:NameOnFocus}" @click="focusName">
            <label for="codePswName" class="pswNameLogo"></label>
            <input type="tel" name="phoneNum" id="codePswName" class="codeInputPhoneNum" placeholder="输入手机号码">
          </div>
          <div @click="focuspsw">
            <input type="text" name="codeNum" class="codepersonPsw" placeholder="输入密码" :class="{borderblue:pswOnFocus}">
            <input type="button" name="GetcodeNum" class="GetcodeNumBtn" value="获取验证码">
          </div>
          <input type="button" value="登录" class="loginBtn" @click="clickLogin">
        </div>
      </li>
      <li class="functionBox">
        <div class="loginSelf" @click="clickLogonSelf">
          <div>
            <img src="../../assets/gou.png" v-if="isLoginSelf"/>
          </div>
          <span>下次自动登录</span>
        </div>
        <span class="ForgetPsw">忘记密码</span>
        <span class="register" @click="showCheckIn">立即注册</span>
      </li>
      <li class="othersLoginMethod">
        <span>其他账户登录:</span>
        <img class="LoginMethodLogo" src="../../assets/search.png" alt="">
        <img class="LoginMethodLogo" src="../../assets/search.png" alt="">
        <img class="LoginMethodLogo" src="../../assets/search.png" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PersonLogin',
  data () {
    return {
      PasswordLogin: true,
      VerificationCode: false,
      NameOnFocus: true,
      pswOnFocus: false,
      isLoginSelf: false,
      successMsg: {
        isSuccess: true,
        imgUrl: 'static/images/logos/search.png'
      },
      pswNameNum: '',
      pswNum: ''
    }
  },
  computed: {
    getIsShowpersonLogin: function () {
      return this.$store.state.isShowpersonLogin
    }
  },
  methods: {
    clickPasswordLogin: function () {
      this.PasswordLogin = true
      this.VerificationCode = false
    },
    clickVerificationCode: function () {
      this.PasswordLogin = false
      this.VerificationCode = true
    },
    focuspsw: function () {
      this.NameOnFocus = false
      this.pswOnFocus = true
    },
    focusName: function () {
      this.NameOnFocus = true
      this.pswOnFocus = false
    },
    clickLogonSelf: function () {
      this.isLoginSelf = !this.isLoginSelf
    },
    clickLogin: function () {
      // console.log(123)
      console.log(this.pswNameNum)
      console.log(this.pswNum)
      var Account = parseInt(this.pswNameNum, 10)
      var passwordNum = parseInt(this.pswNum, 10)
      if (Account === 0 && passwordNum === 0) {
        this.$store.commit('emitisShowpersonLogin', false)
        this.$store.commit('newVisitor', this.successMsg)
      }
    },
    showCheckIn: function () {
      console.log(123132156465)
      this.$store.commit('emitisShowpersonLogin', false)
      this.$store.commit('emitisShowCheckIn', true)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.personLogin {
  position: absolute;
  right: 428px;
  top: 120px;
  z-index: 99;
  background: #fff;
  width: 350px;
  height: 422px;
  border-radius: 5px;
}
.personLogin_tagBt {
  display: flex;
  width: 350px;
  height: 65px;
  padding: 0 30px 0 20px;
}
.personLogin_tagBtitem {
  height: 55px;
  width: 154px;
  text-align: center;
  line-height: 55px;
  border-bottom: 1px solid #D7D7D7;
  cursor: pointer;
  font-size: 18px;
  color: #777777;
}
.personLogin_tagBtitem.loginState {
  border-bottom: 1px solid #B58516;
  color: #CA9F3B;
}
.inputBox {
  width: 310px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #D7D7D7;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}
.pswNameLogo {
  display: inline-block;
  width: 28px;
  height: 19px;
  border-right: 1px solid #999999;
  margin: 0 13px;
  background: url(../../assets/search.png) left/17px 19px no-repeat;
}
.pswPswLogo {
  display: inline-block;
  width: 28px;
  height: 19px;
  border-right: 1px solid #999999;
  margin: 0 13px;
  background: url(../../assets/search.png) left/17px 19px no-repeat;
}
#personPswName, #personPsw {
  width: 255px;
  height: 38px;
  line-height: 38px;
  font-size: 14px;
  color: #999;
  border: 0;
  background: none;
}
.codeInputPhoneNum {
  width: 255px;
  height: 38px;
  line-height: 38px;
  font-size: 14px;
  color: #999;
  border: 0;
  background: none;
}
.borderblue {
  border: 1px solid #FF7112;
}
input:-webkit-autofill {
  box-shadow: 0 0 0px 1000px white inset !important;
}
.personInputMain {
  padding: 20px 20px 0 20px;
}
.loginBtn {
  width: 310px;
  height: 52px;
  border-radius: 4px;
  background: -webkit-linear-gradient(#FFE19C, #B58516); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#FFE19C, #B58516); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#FFE19C, #B58516); /* Firefox 3.6 - 15 */
  background: linear-gradient(#FFE19C, #B58516); /* 标准的语法 */
  font-size: 22px;
  text-align: center;
  line-height: 52px;
  border: 0;
  color: #fff;
  margin-top: 18px;
  cursor: pointer;
}
.functionBox {
  display: flex;
  padding: 20px 20px 27px 20px;
}
.loginSelf {
  display: flex;
  font-size: 14px;
  color: #999;
  align-items: center;
  cursor: pointer;
}
.loginSelf div {
  width: 16px;
  height: 16px;
  background: #C79C37;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 9px;
}
.ForgetPsw, .register {
  color: #FF7112;
  font-size: 14px;
  cursor: pointer;
}
.ForgetPsw {
  margin-left: 10px;
}
.register {
  margin-left: 72px;
}
.othersLoginMethod {
  padding: 20px 20px 0 20px;
  border-top: 1px solid #D7D7D7;
  font-size: 14px;
  color: #777;
  display: flex;
  align-items: center;
}
.othersLoginMethod span {
  margin-right: 18px;
}
.LoginMethodLogo {
  margin-right: 26px;
}
.codepersonPsw {
  width: 142px;
  height: 38px;
  border-radius: 4px;
  border: 1px solid #D7D7D7;
  padding-left: 21px;
  color: #999;
  font-size: 14px;
  line-height: 38px;
  margin-bottom: 14px;
  cursor: pointer;
}
.GetcodeNumBtn {
  width: 133px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #FFF3D6;
  color: #C1942B;
  font-size: 14px;
  border: none;
  border: 0;
  margin-left: 8px;
  margin-bottom: 14px;
  cursor: pointer;
}
</style>
