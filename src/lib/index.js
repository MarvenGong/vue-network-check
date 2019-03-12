import './style.css';
let obj = {};
obj.install = function(Vue, options) {
  let defaultOptions = {
    text: '网络连接失败，请检查网络配置'
  }
  let config = Object.assign(defaultOptions, options);
  window.addEventListener('online',  function() {
    const netErrorDiv = document.querySelector('#net-err');
    if (netErrorDiv) {
      document.body.removeChild(netErrorDiv);
    }
  });
  window.addEventListener('offline', function() {
    let alertDiv = document.createElement('div');
    alertDiv.id = 'net-err';
    alertDiv.innerText = config.text;
    document.body.appendChild(alertDiv);
  });
}
export default obj;