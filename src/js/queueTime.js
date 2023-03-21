function queueTime(customers, n) {
  const registers = new Array(n).fill(0)

  for (let waitTime of customers) {
    // находим кассу с минимальным временем ожидания
    const minWaitTime = registers.indexOf(Math.min(...registers))
    // console.log(minWaitTime)
    // добавляем время клиента к этой кассе
    registers[minWaitTime] += waitTime
    // console.log([...registers])
  }

  return Math.max(...registers)
}

// queueTime([], 1) // 0
// queueTime([1, 2, 3, 4], 1) //10
// queueTime([2, 2, 3, 3, 4, 4], 2) // 9
// queueTime([1, 2, 3, 4, 5], 100) // 5
// queueTime([2, 3, 10, 2], 2) // 12
