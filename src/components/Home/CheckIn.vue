<template>
  <div class="CheckIn" v-if="getIsShowCheckIn">
    <ul class="CheckIn_nav">
      <li class="CheckIn_navItems" v-for="(items, index) in CheckInNav" :key="index" :class="{active:items.isActive}" @click="changerole(items, index)">{{items.name}}</li>
    </ul>
    <!-- 个人 -->
    <ul class="CheckIn_navperson" v-show="person">
      <li class="checkIn_inputBox" :class="{borderorange:NameOnFocus}" @click="focusName">
        <label for="checkin_personName" class="personNameLogo"></label>
        <input type="tel" name="checkin_personName" id="checkin_personName" placeholder="输入手机号码" class="checkin_writeBox">
      </li>
      <li class="checkIn_inputBox" :class="{borderorange:pswOnFocus}" @click="focuspsw">
        <label for="checkin_personPsw" class="personPswLogo"></label>
        <input type="tel" name="checkin_personPsw" id="checkin_personPsw" placeholder="密码（6-16字母，数字，空格）" class="checkin_writeBox">
      </li>
      <!-- 验证码 -->
      <li>
        <input type="text" class="check_code" placeholder="验证码" :class="{borderorange:iscode}" @click="focuscode"/>
        <input type="button" value="获取验证码" class="check_codeBtn"/>
      </li>
      <li class="checkin_Agree">
        <div @click="click_agree">
          <img src="../../assets/gou.png" v-if="isAgree" />
        </div>
        <span>我已同意并阅读</span>
        <b>《用户协议》</b>
      </li>
      <li class="checkin_registerBtn" @click="personRegister">
        注册
      </li>
      <li class="checkin_now">
        <span>已有会员？</span>
        <span class="checkin_nowbtn" @click="showLoginBox">马上登录</span>
      </li>
    </ul>
    <!-- 企业 -->
    <ul class="CheckIn_navperson" v-show="company">
      <li class="checkIn_inputBox" :class="{borderorange:NameOnFocus}" @click="focusName">
        <label for="checkin_personName" class="personNameLogo"></label>
        <input type="tel" name="checkin_personName" id="checkin_personName" placeholder="输入手机号码" class="checkin_writeBox">
      </li>
      <li class="checkIn_inputBox" :class="{borderorange:pswOnFocus}" @click="focuspsw">
        <label for="checkin_personPsw" class="personPswLogo"></label>
        <input type="tel" name="checkin_personPsw" id="checkin_personPsw" placeholder="密码（6-16字母，数字，空格）" class="checkin_writeBox">
      </li>
      <!-- 验证码 -->
      <li>
        <input type="text" class="check_code" placeholder="验证码" :class="{borderorange:iscode}" @click="focuscode"/>
        <input type="button" value="获取验证码" class="check_codeBtn"/>
      </li>
      <li class="checkin_Agree">
        <div @click="click_agree">
          <img src="../../assets/gou.png" v-if="isAgree" />
        </div>
        <span>我已同意并阅读</span>
        <b>《用户协议》</b>
      </li>
      <li class="checkin_registerBtn">
        注册
      </li>
      <li class="checkin_now">
        <span>已有会员？</span>
        <span class="checkin_nowbtn" @click="showLoginBox">马上登录gognsi</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CheckIn',
  data () {
    return {
      NameOnFocus: true,
      pswOnFocus: false,
      iscode: false,
      isAgree: false,
      person: true,
      company: false,
      CheckInNav: [
        {
          name: '个人会员',
          isActive: true
        },
        {
          name: '企业会员',
          isActive: false
        }
      ]
    }
  },
  computed: {
    getIsShowCheckIn: function () {
      return this.$store.state.isShowCheckIn
    }
  },
  methods: {
    changerole: function (items, index) {
      for (var i = this.CheckInNav.length - 1; i >= 0; i--) {
        this.CheckInNav[i].isActive = false
      }
      items.isActive = true
      if (index === 0) {
        this.person = true
        this.company = false
      } else if (index === 1) {
        this.person = false
        this.company = true
      }
    },
    focusName: function () {
      this.NameOnFocus = true
      this.pswOnFocus = false
      this.iscode = false
    },
    focuspsw: function () {
      this.NameOnFocus = false
      this.pswOnFocus = true
      this.iscode = false
    },
    focuscode: function () {
      this.NameOnFocus = false
      this.pswOnFocus = false
      this.iscode = true
    },
    click_agree: function () {
      this.isAgree = !this.isAgree
    },
    showLoginBox: function () {
      // console.log(156)
      this.$store.commit('emitisShowCheckIn', false)
      this.$store.commit('emitisShowpersonLogin', true)
    },
    personRegister: function () {
      this.$router.push('/CreatCards')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.CheckIn {
  position: absolute;
  right: 411px;
  top: 120px;
  z-index: 99;
  background: #fff;
  width: 310px;
  height: 413px;
  border-radius: 5px;
  padding: 9px 20px 0 20px;
}
.CheckIn_nav {
  display: flex;
}
.CheckIn_navItems {
  width: 154px;
  text-align: center;
  font-size: 18px;
  color: #777;
  padding: 19px 0;
  cursor: pointer;
}
.CheckIn_navItems.active {
  color: #B58516;
  border-bottom: 2px solid #B58516;
}
.personNameLogo {
  display: inline-block;
  width: 28px;
  height: 19px;
  border-right: 1px solid #999999;
  margin: 0 13px;
  background: url(../../assets/search.png) left/17px 19px no-repeat;
}
.personPswLogo {
  display: inline-block;
  width: 28px;
  height: 19px;
  border-right: 1px solid #999999;
  margin: 0 13px;
  background: url(../../assets/search.png) left/17px 19px no-repeat;
}
.checkIn_inputBox {
  width: 310px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #D7D7D7;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}
.checkin_writeBox {
  width: 255px;
  height: 38px;
  line-height: 38px;
  font-size: 14px;
  color: #999;
  border: 0;
  background: none;
}
.CheckIn_navperson {
  padding-top: 29px;
}
.check_code {
  width: 137px;
  height: 38px;
  line-height: 38px;
  border: 1px solid #D7D7D7;
  padding-left: 26px;
  color: #999;
  font-size: 14px;
  border-radius: 4px;
}
.check_codeBtn {
  width: 133px;
  height: 40px;
  background: #FFF3D6;
  border: 0;
  text-align: center;
  line-height: 40px;
  color: #C1942B;
  font-size: 14px;
  cursor: pointer;
  margin-left: 8px;
}
.checkin_Agree {
  display: flex;
  font-size: 14px;
  color: #999;
  align-items: center;
  cursor: pointer;
  margin-top: 21px;
}
.checkin_Agree div {
  width: 16px;
  height: 16px;
  background: #C79C37;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 9px;
}
.checkin_Agree b {
  color: #FF7112;
}
.checkin_registerBtn {
  width: 310px;
  height: 52px;
  color: #fff;
  text-align: center;
  line-height: 52px;
  font-size: 22px;
  border-radius: 4px;
  margin-top: 28px;
  cursor: pointer;
  background: -webkit-linear-gradient(#FFE19C, #B58516); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#FFE19C, #B58516); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#FFE19C, #B58516); /* Firefox 3.6 - 15 */
  background: linear-gradient(#FFE19C, #B58516); /* 标准的语法 */
}
.checkin_now {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #999;
  font-size: 14px;
  margin-top: 18px;
}
.checkin_nowbtn {
  color: #FF7112;
  cursor: pointer;
}
.borderorange {
  border-color: #FF7112;
}
</style>
