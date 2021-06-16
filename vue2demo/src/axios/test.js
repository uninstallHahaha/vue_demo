import axiox from 'axios'

//创建多个axios给不同的配置
ax1 = axiox.create({
    baseURL:'127.9.1.120',
    timeout: 5000
})
ax2 = axiox.create({
    baseURL:'220.89.1.109',
    timeout: 3000
})
//然后可以使用不同的实例对不同的服务器发起请求
ax1({
    URL: '/getName'
})
ax2({
    URL: '/getAge'
})