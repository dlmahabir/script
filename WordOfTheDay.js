const RandomNumber = nums => {
    // Gets # from 0 -> nums - 1
    return Math.floor(Math.random() * nums)
  }
  
  const inspirations = {
    words: ['love', 'peace', 'mistakes', 'learn', 'cahrity'],
    omen: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['show some more', 'think of others', 'don't worry about it', 'make a change']
  }
  
  // Store the 'wisdom' in an array
  let personalInspire = []
  
  // Iterate over the object
  for(let prop in inspirations) {
    let optionIdx = RandomNumber(inspirations[prop].length)
  
    // use the object's properties to customize the message being added to personalInspire  
    switch(prop) {
      case 'words':
        personalInspire.push(`Your sign right now is a "${inspirations[prop][optionIdx]}".`)
        break
      case 'omen':
        personalInspire.push(`You are having: "${inspirations[prop][optionIdx]}".`)
        break
      case 'advice':
        personalInspire.push(`You should: "${inspirations[prop][optionIdx]}".`)
        break
      default:
        personalInspire.push('There is not enough info.')
    }
  }
  
  function formatWisdom(wisdom) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = personalInspire.join('\n')
    console.log(formatted)
  }
  
  formatWisdom(personalInspire);
