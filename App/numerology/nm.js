const numberData = {
    1: 'In numerology, the number 1 represents independence, leadership, ambition, and originality. It is associated with new beginnings, self-confidence, and assertiveness. People with a strong number 1 influence are often determined, innovative, and pioneering individuals who strive for success and are not afraid to stand out from the crowd.',
    2: 'The number 2 is characterized by cooperation, harmony, balance, and diplomacy. It signifies partnerships, relationships, and the need for companionship. Individuals influenced by the number 2 are often peacemakers, empathetic, and sensitive to the needs of others. They excel in collaborative efforts and value teamwork and compromise.',
    3: 'Representing creativity, expression, communication, and optimism, the number 3 is associated with joy, enthusiasm, and socialization. People with a strong number 3 influence are often artistic, charismatic, and outgoing individuals who enjoy expressing themselves through various forms of creativity, such as art, music, or writing.',
    4: 'Symbolizing stability, practicality, organization, and hard work, the number 4 represents a solid foundation and a disciplined approach to life. It is associated with reliability, determination, and perseverance. Individuals influenced by the number 4 are often methodical, reliable, and diligent workers who excel in roles that require attention to detail and systematic planning.',
    5: 'The number 5 embodies freedom, adventure, versatility, and adaptability. It signifies change, unpredictability, and the pursuit of new experiences. People with a strong number 5 influence are often adventurous, curious, and versatile individuals who thrive in dynamic environments and embrace life\'s opportunities for growth and exploration.',
    6: 'Representing love, nurturing, harmony, and responsibility, the number 6 is associated with family, home, and domesticity. It signifies caregiving, compassion, and service to others. Individuals influenced by the number 6 are often loving, supportive, and responsible caregivers who prioritize the well-being of their loved ones and community.',
    7: 'Symbolizing wisdom, introspection, spirituality, and intuition, the number 7 represents a quest for knowledge and inner understanding. It signifies intellectual pursuits, introspection, and a deep connection to the spiritual realm. People with a strong number 7 influence are often analytical, intuitive, and philosophical individuals who seek meaning and truth in life\'s mysteries.',
    8: 'The number 8 embodies abundance, success, power, and achievement. It signifies material prosperity, financial mastery, and business acumen. Individuals influenced by the number 8 are often ambitious, driven, and goal-oriented individuals who are determined to achieve success and financial security through hard work and perseverance.',
    9: 'Representing compassion, humanitarianism, spirituality, and universal love, the number 9 signifies selflessness, altruism, and service to humanity. It embodies ideals of empathy, forgiveness, and the desire to make a positive difference in the world. People with a strong number 9 influence are often compassionate, idealistic, and humanitarian individuals who are dedicated to serving others and promoting social justice and equality.',  
    11: 'Known as a master number in numerology, the number 11 embodies intuition, spiritual enlightenment, and heightened awareness. It signifies spiritual awakening, intuition, and the pursuit of higher consciousness. Individuals influenced by the number 11 are often intuitive, visionary, and spiritually evolved beings who possess deep insights and a profound connection to the divine.',
    22: 'Also considered a master number, the number 22 represents mastery, power, and the ability to manifest one\'s dreams into reality. It signifies visionary leadership, practical wisdom, and the potential for profound achievements on a global scale. Individuals influenced by the number 22 are often visionary leaders, master builders, and strategic planners who have the ability to create lasting impact and positive change in the world.',
    33: 'As the highest master number in numerology, the number 33 embodies universal love, compassion, and spiritual enlightenment on the highest level. It signifies divine guidance, selfless service, and the embodiment of spiritual principles in everyday life. People influenced by the number 33 are often enlightened beings, spiritual teachers, and healers who serve as catalysts for transformation and awakening in the world.'
  };
  
  function calculateNumerology(event) {
    const name = document.getElementById('name').value.trim(); // Trim leading/trailing whitespaces
    const birthday = new Date(document.getElementById('birthday').value);
  
    // Basic validation (can be extended for more robust checks)
    if (!name || !birthday.getTime()) {
      alert('Please enter your name and a valid birthday.');
      return; // Prevent further processing if invalid
    }
  
    const luckyNumber = calculateLuckyNumber(name);
    const luckyColor = calculateLuckyColor(birthday);
  
    event.preventDefault();

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <p>Your lucky number is: ${luckyNumber}</p>
      <p>${numberData[luckyNumber] || 'Information not available'}</p>
      <p>Your lucky color is: ${luckyColor}</p>
    `;
  }
  
  // Implement calculateLuckyNumber and calculateLuckyColor functions here
  function calculateLuckyNumber(name) {
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
        if (/[a-zA-Z]/.test(name[i])) {
            sum += name.charCodeAt(i);
        }
    }
    return sum % 10;
}

function calculateLuckyColor(birthday) {
    const month = birthday.getMonth() + 1; // Month is zero-based
    return month % 12 === 0 ? 'Blue' : 'Green' ;
}
  