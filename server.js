const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')

app.use(cors())
app.use(express.static(__dirname + '/public'))

const confidants = {
    'igor': {
        name: 'Igor',
        arcana: 'Fool',
        arcanaNum: '0',
        lore: 'Master of the Velvet Room. Observes and aids you under the pretext of "rehabilitation toward freedom."',
        src: 'https://simple-p5-api.herokuapp.com/img/igor_confidant.png'
    },
    'morgana': {
        name: 'Morgana',
        arcana: 'Magician',
        arcanaNum: 'I',
        lore: 'An amnesiac talking cat who moved in with you after you met in the Metaverse',
        src: 'https://simple-p5-api.herokuapp.com/img/morgana_confidant.png'    
    },
    'makoto': {
        name: 'Makoto Niijima',
        arcana: 'Priestess',
        arcanaNum: 'II',
        lore: 'Shujin Academy\'s student council president. Casting off expectations of her, she joins the group.',
        src: 'https://simple-p5-api.herokuapp.com/img/makoto_confidant.png'      
    },
    'haru': {
        name: 'Haru Okumura',
        arcana: 'Empress',
        arcanaNum: 'III',
        lore: 'Third-year student of Shujin Academy and heiress to a conglomerate. She rises to avenge her father.',
        src: 'https://simple-p5-api.herokuapp.com/img/haru_confidant.png'      
    },
    'yusuke': {
        name: 'Yusuke Kitagawa',
        arcana: 'Emperor',
        arcanaNum: 'IV',
        lore: 'Japanese-art genius and Kosei High student, He is resentful of adults who leech off the talent of others.',
        src: 'https://simple-p5-api.herokuapp.com/img/yusuke_confidant.png'      
    },
    'sojiro': {
        name: 'Sojiro Sakura',
        arcana: 'Hierophant',
        arcanaNum: 'V',
        lore: 'The boss of the café Leblanc. He is your guardian in Tokyo.',
        src: 'https://simple-p5-api.herokuapp.com/img/sojiro_confidant.png',
    },    
    'ann': {
        name: 'Ann Takamaki',
        arcana: 'Lovers',
        arcanaNum: 'VI',
        lore: 'A quarter-American who spent time abroad. She stood up to save those like herself and her friend.',
        src: 'https://simple-p5-api.herokuapp.com/img/ann_confidant.png'      
    },
    'ryuji': {
        name: 'Ryuji Takamato',
        arcana: 'Chariot',
        arcanaNum: 'VII',
        lore: 'A fellow Persona user and the former star of the track team. He resents selfish adults.',
        src: 'https://simple-p5-api.herokuapp.com/img/ryuji_confidant.png'
    }, 
    'akechi': {
        name: 'Goro Akechi',
        arcana: 'Justice',
        arcanaNum: 'VIII',
        lore: 'A third-year "high school detective" from another school. He looks for the culprit of the psychotic breakdowns.',
        src: 'https://simple-p5-api.herokuapp.com/img/akechi_confidant.png'
    }, 
    'futaba': {
        name: 'Futaba Sakura',
        arcana: 'Hermit',
        arcanaNum: 'IX',
        lore: 'Genius hacker who is a year younger than you. She opened up her heart to the group that saved her.',
        src: 'https://simple-p5-api.herokuapp.com/img/futaba_confidant.png'      
    }, 
    'chihaya': {
        name: 'Chihaya Mifune',
        arcana: 'Fortune',
        arcanaNum: 'X',
        lore: 'A fortune teller who runs a shop on a Shinjuku street, The accuracy of her predictions is spooky.',
        src: 'https://simple-p5-api.herokuapp.com/img/chihaya_confidant.png'      
    }, 
    'twins': {
        name: 'Caroline and Justine',
        arcana: 'Strength',
        arcanaNum: 'XI',
        lore: 'The twin wardens of the Velvet Room, Under their master\'s orders, they test your skills and help you fuse.',
        src: 'https://simple-p5-api.herokuapp.com/img/twins_confidant.png'      
    }, 
    'iwai': {
        name: 'Munehisa Iwai',
        arcana: 'Hanged Man',
        arcanaNum: 'XII',
        lore: 'Owner of an airsoft shop on Central Street and a skilled craftsman, He helps you if you gather him info.',
        src: 'https://simple-p5-api.herokuapp.com/img/iwai_confidant.png'      
    }, 
    'takemi': {
        name: 'Tae Takemi',
        arcana: 'Death',
        arcanaNum: 'XIII',
        lore: 'A doctor of a clinic in Yongen-Jaya who has a bad rep. She cooperates if you help with her trial tests.',
        src: 'https://simple-p5-api.herokuapp.com/img/takemi_confidant.png'      
    }, 
    'kawakami': {
        name: 'Sadayo Kawakami',
        arcana: 'Temperance',
        arcanaNum: 'XIV',
        lore: 'Your homeroom teacher at Shujin Academy. She offers help if you keep quiet about her job as a maid.',
        src: 'https://simple-p5-api.herokuapp.com/img/kawakami_confidant.png'      
    }, 
    'ohya': {
        name: 'Ichijo Ohya',
        arcana: 'Devil',
        arcanaNum: 'XV',
        lore: 'Journalist who often goes to a bar in Shinjuku. She controls public opinion by writing articles.',
        src: 'https://simple-p5-api.herokuapp.com/img/ohya_confidant.png'      
    }, 
    'shinya': {
        name: 'Shinya Oda',
        arcana: 'Tower',
        arcanaNum: 'XVI',
        lore: 'A grade schooler who frequents the arcade. The King of shooters can teach you his ways.',
        src: 'https://simple-p5-api.herokuapp.com/img/shinya_confidant.png'      
    }, 
    'hifumi': {
        name: 'Hifumi Togo',
        arcana: 'Star',
        arcanaNum: 'XVII',
        lore: 'Yusuke\'s classmate who strives to be a pro shogi player. She teaches you battle strategy through shogi.',
        src: 'https://simple-p5-api.herokuapp.com/img/hifumi_confidant.png'      
    },
    'mishima': {
        name: 'Yuuki Mishima',
        arcana: 'Moon',
        arcanaNum: 'XVIII',
        lore: 'Your classmate who knows your identity. He wants to help with making the world a better place.',
        src: 'https://simple-p5-api.herokuapp.com/img/mishima_confidant.png'      
    },
    'yoshida': {
        name: 'Toranosuke Yoshida',
        arcana: 'Sun',
        arcanaNum: 'XIX',
        lore: 'An independent election candidate. He teaches you speech skills that are essential for politics.',
        src: 'https://simple-p5-api.herokuapp.com/img/yoshida_confidant.png'      
    },
    'sae': {
        name: 'Sae Niijima',
        arcana: 'Judgement',
        arcanaNum: 'XX',
        lore: 'A young, talented prosecutor of the Special Investigations Unit, Makoto\'s sister and a regular at Leblanc.',
        src: 'https://simple-p5-api.herokuapp.com/img/sae_confidant.png'      
    },
    'unknown': {
        name: 'unknown',
        arcana: 'unknown',
        arcanaNum: '???',
        lore: '???',
        src: '#'
    },  
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get('/api', (req, res) => {
    res.json(confidants)
});

app.get('/api/:name', (req, res) => {
    let confidant = req.params.name.toLowerCase();
    if (confidants[confidant]){
        res.json(confidants[confidant])
    } else {
        res.json(confidants['unknown']);
    }
});

app.listen(process.env.PORT || PORT, _ => {
    console.log(`server running on port ${PORT}`);
});