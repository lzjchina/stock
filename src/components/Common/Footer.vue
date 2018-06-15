<template>
  <div class="footer">
    <ul class="footer_box">
      <li class="footer_line1">
        <span class="footer_border">地址:深圳南山区沙河西路1809号深圳生态科技园一区2栋A栋12座409</span>
        <span class="footer_border">邮编：518075</span>
        <span class="footer_border">电话：0755-86358999</span>
        <span class="footer_border">传真：0755-26577562</span>
      </li>
      <li class="footer_line2">
        <span class="footer_border"><router-link class="footer_color" to="/">关于我们</router-link></span>
        <span class="footer_border"><router-link class="footer_color" to="/">联系我们</router-link></span>
        <span class="footer_border"><router-link class="footer_color" to="/">法律声明</router-link></span>
        <span class="footer_border">粤公网安备：44030502001710</span>
        <span class="footer_border">粤ICP备11001592号-1</span>
        <span class="footer_border footer_borderNo">站长统计</span>
        <span class="footer_ewm"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: '古往今来'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  width: 100%;
  height: 228px;
  background-color: #343434;
  display: flex;
  justify-content: center;
}
.footer .footer_box {
  width: 1100px;
  height: 188px;
  padding-top: 40px;
  background-color: #343434;
  font-size: 14px;
  color: #fff;
}
.footer .footer_line1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer .footer_line2 {
  display: flex;
  justify-content: center;
  margin-top: 29px;
}
.footer .footer_border {
  height: 20px;
  line-height: 20px;
  padding: 0 14px;
  border-right: 1px solid #fff;
  white-space: nowrap;
}
.footer .footer_line1 .footer_border:last-child {
  border-right: none;
}
.footer .footer_line2 .footer_border:last-child {
  border-right: none;
}
.footer .footer_borderNo {
  border: none;
}
.footer .footer_ewm {
  display: inline-block;
  width: 99px;
  height: 99px;
  background: url(../../assets/footer_ewm.png) center/99px 99px no-repeat;
}
.footer .footer_color {
  color: #fff;
}
</style>
