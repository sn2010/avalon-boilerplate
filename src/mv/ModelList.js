/**
 * Created by linmingxiong on 16/9/27.
 */

var vm = avalon.define({
  $id: 'modelList',
  id: 0,
  data: [],
  init: function () {
    this.request();
  },
  clickHandle: function (e) {
    this.id = e.id;
    var path = avalon.router.getLastPath().split('/')[1];
    location.hash = "#!/" + path + '/' + e.id
  },
  request: function () {
    avalon.ajax({
      url: apiPath+'model.json',
      success: function (data, textStatus, XHR) {
        vm.data = data;
        if (!vm.id) {
          var path = location.hash.split('/')[2];
          path = path || 'info';
          location.hash = "#!/" + path + '/' + data[0].id
        }
      }
    });
  },
  newModelDialogConfig: {
    id: 'XXXx',
    title: '新建扩展模型',
    show: false,
    ok:function () {
      alert(0)
    }
  },
  newModelDialog: function () {
    this.newModelDialogConfig.show = true;
  }

});
vm.init();
module.exports = vm;