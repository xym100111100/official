<template>
  <div id="ContactUs">
    <div class="banner container-fuild text-center">联系我们</div>
    <div class="container">
      <div class="container-fuild ContactUs-container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6">
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label for="name" class="col-sm-2 control-label">姓名</label>
                <div class="col-sm-10 col-xs-12">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="请输入名字"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="email" class="col-sm-2 control-label">邮箱</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="请输入邮箱"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="tel" class="col-sm-2 control-label">电话</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="tel"
                    placeholder="请输入电话"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="content" class="col-sm-2 control-label">内容</label>
                <div class="col-sm-10">
                  <textarea
                    class="form-control"
                    id="content"
                    rows="8"
                    placeholder="请输入内容"
                  ></textarea>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <button type="submit" class="btn btn-default btn-block btn-info">
                    提交
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <div class="wow zoomIn">
              <baidu-map class="bm-view" :center="markerPoint" :zoom="zoom">
                <bm-marker
                  :position="markerPoint"
                  :dragging="true"
                  animation="BMAP_ANIMATION_BOUNCE"
                >
                </bm-marker>
              </baidu-map>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";

export default {
  name: "ContactUs",
  data() {
    return {
      show: true,
      markerPoint: { lng: 108.445555, lat: 22.913355 },
      zoom: 14,
    };
  },
  mounted() {
    var wow = new WOW();
    wow.init();
  },
  methods: {
    infoWindowClose() {
      this.show = false;
    },
    infoWindowOpen() {
      this.show = true;
    },
  },
};
</script>
<style scoped>
.bm-view {
  width: 100%;
  height: 365px;
}

.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url("../assets/img/banner_1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.ContactUs-container {
  padding: 80px 0;
  transition: all ease 0.5s;
  box-sizing: border-box;
}

.row {
  margin-right: 0;
  margin-left: 0;
}
@media screen and (max-width: 997px) {
  .ContactUs-container {
    padding: 20px 0;
  }
}
</style>

