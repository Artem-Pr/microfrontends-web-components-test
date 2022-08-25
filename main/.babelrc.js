module.exports = {
    presets: 
        [
            "@babel/preset-env",
            "@babel/preset-react"
        ],
    plugins: 
        [
            [
                "@babel/plugin-transform-runtime",
                {
                    regenerator: true
                }
            ],
            [
                "@babel/plugin-proposal-decorators", 
                {
                    decoratorsBeforeExport: true 
                }
            ],
            [
                "module-resolver",
                {
                    alias: 
                        {
                            "@Component": "./src/components",
                            "@Api": "./src/api"
                        }
                }
            ]
        ]
}