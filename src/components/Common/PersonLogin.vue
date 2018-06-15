<template>
  <div class="personLogin">
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
        <form v-if="PasswordLogin" action="PersonLogin_submit" method="get" accept-charset="utf-8">
          <div class="inputBox" :class="{borderblue:NameOnFocus}" @click="focusName">
            <label for="personPswName" class="pswNameLogo"></label>
            <input type="tel" name="firstname" id="personPswName" placeholder="输入手机号码">
          </div>
          <div class="inputBox" :class="{borderblue:pswOnFocus}" @click="focuspsw">
            <label for="personPsw" class="pswPswLogo"></label>
            <input type="password" name="lastname" id="personPsw" placeholder="输入密码">
          </div>
          <input type="submit" value="登录" class="loginBtn">
        </form>
        <form v-if="VerificationCode" action="PersonLogin_submit" method="get" accept-charset="utf-8">dsdds
          <div class="inputBox" :class="{borderblue:NameOnFocus}" @click="focusName">
            <label for="personPswName" class="pswNameLogo"></label>
            <input type="tel" name="firstname" id="personPswName" placeholder="输入手机号码">
          </div>
          <div class="inputBox" :class="{borderblue:pswOnFocus}" @click="focuspsw">
            <label for="personPsw" class="pswPswLogo"></label>
            <input type="password" name="lastname" id="personPsw" placeholder="输入密码">
          </div>
          <input type="submit" value="登录" class="loginBtn">
        </form>
      </li>
      <li class="functionBox">
        <div>
          df
        </div>
        <router-link to="/">忘记密码</router-link>
        <router-link to="/">立即注册</router-link>
      </li>
      <li class="othersLoginMethod">
        其他账户登录
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
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
      pswOnFocus: false
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
  height: 380px;
  border-radius: 5px;
}
.personLogin_tagBt {
  display: flex;
  width: 100%;
  height: 55px;
}
.personLogin_tagBtitem {
  height: 55px;
  width: 175px;
  text-align: center;
  line-height: 55px;
  border-bottom: 1px solid #D7D7D7;
  cursor: pointer;
  font-size: 18px;
  color: #777777;
}
.personLogin_tagBtitem.loginState {
  border-bottom: 1px solid #F4AB00;
  color: #F4AB00;
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
.borderblue {
  border: 1px solid #A2C1FF;
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
  background: #F4AB00;
  font-size: 22px;
  text-align: center;
  line-height: 52px;
  border: 0;
  color: #fff;
  margin-top: 18px;
  cursor: pointer;
}
</style>
