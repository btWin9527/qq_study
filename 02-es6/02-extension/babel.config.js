const presets = [
    [
        "@babel/env",
        {
            targets: {
                ie: '9',
                edge: "17",
                firefox: "60",
                chrome: "50",
                safari: "11.1",
            },
            "corejs": "3", // <---  此处加个这个，就没有报错警告了
            useBuiltIns: "usage",
        },
    ],
];

module.exports = {
    presets
};