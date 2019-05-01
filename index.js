function MdvuePlugin (api) {
    api.chainWebpack((config) => {
        config.module
            .rule('compile')
                .test(/\.(mdvue|mdv)$/)
                    .use('vue')
                        .loader('vue-loader')
                        .end()
                    .use('mdvue')
                        .loader('mdvue')
                        .end();
    });
}

module.exports = MdvuePlugin;
