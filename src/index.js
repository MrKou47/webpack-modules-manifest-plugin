function WebpackModulesManifestPlugin(options) {
  this.options = options;
}

WebpackModulesManifestPlugin.prototype.apply = function (compiler) {
  compiler.plugin('emit', function (compilation, callback) {
    const modules = compilation.modules.map(m => {
      const filenameReg = /\w+(?=\.)/;
      return {
        id: m.id,
        name: m.portableId.match(filenameReg) ? m.portableId.match(filenameReg)[0] : m.portableId,
        portableId: m.portableId
      }
    });
    const moduleManifestJson = JSON.stringify({
      modules,
    })
    compilation.assets['modules-manifest.json'] = {
      source: function () {
        return moduleManifestJson;
      },
      size: function () {
        return moduleManifestJson.length;
      }
    };
    callback();
  });
}

module.exports = WebpackModulesManifestPlugin;