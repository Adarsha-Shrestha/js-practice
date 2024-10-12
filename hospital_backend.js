const { application } = require('express')
const express = require('express')
const app = express()
const port = 3000

var users = [{
  name: 'John',
  kidneys:[]
},{
  name: 'Jane',
  kidneys:[]
}]

function kidneycount(user){
  let healthy_count = 0
  let unhealthy_count = 0
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy === true) {
      healthy_count++
    } else {
      unhealthy_count++
    }
  }
  return {healthy: healthy_count, unhealthy: unhealthy_count, total: healthy_count + unhealthy_count}
}

console.log(kidneycount(users[0]));

app.use(express.json())

app.get('/', (req, res) => {
  let count = kidneycount(users[0])
  console.log(count);
  res.json(count);
})

app.post('/', (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy
  })
  res.json({'kidney added': true});
})

app.put('/', (req, res) => {
  for (let i = 0; i <= users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy === false) {
      users[0].kidneys[i].healthy = true;
    }
  }
  res.json({'kidney fixed': true});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
