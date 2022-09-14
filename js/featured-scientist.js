const scientistInfo = [
    {
        name: 'Archimedes (287 - 212 BC)',
        title: 'Mathematician, physicist, astronomer, engineer, inventor.',
        info: 'He was popular for his ingenious thinking, and was responsible for developing many innovative machines. He is best known for formulating the method for finding the exact volume of an irregularly shaped object.',
        image: './assets/scientist/Archimedes.jpg',
        altText: 'Archimedes Image',
    },

    {
        name: 'Galileo Galilei (1564-1642)',
        title: 'Physicist, mathematician, astronomer, engineer, and philosopher.',
        info: 'He is known as the father of modern observational astronomy, the father of modern physics, and also the father of modern science. From among his several inventions and discoveries, Galileo is best known for his contributions to astronomy. Using the telescope, he was able to confirm the phases of planet Venus, discover and document the four largest satellites of planet Jupiter, which have been named as Galilean moons in his honor, and also observe and analyze sunspots. He even championed the theory of a heliocentricism, at a time when most of the world supported geocentricism.',
        image: './assets/scientist/Galileo.jpg',
        altText: 'Galileo Image',
    },

    {
        name: 'Sir Isaac Newton (1642 - 1726)',
        title: 'English physicist and mathematician',
        info: 'He played a key role in the development of calculus, and through his extensive study of light, made the first practical reflecting telescope, a technology which till date is used to study the heavens. But perhaps the most important and famous of his discoveries was that of gravity. Newton was able to, not only describe why an apple fell towards the Earth rather than fly away from it, but also provide the mathematical basis for this theory, and describe the motion of objects. His discoveries went on to lay the foundation of classical mechanics, and are considered to be some of the most significant contributions to the world of physics.',
        image: './assets/scientist/Newton.jpg',
        altText: 'Sir Isaac Newton Image',
    },

    {
        name: 'Michael Faraday (1791 - 1867)',
        title: 'English physicist.',
        info: 'made some of the most significant contributions to the fields of electromagnetism and electro-chemistry. Although his formal education was scarce, through extensive research and experimentation, he was able to discover the principle of electromagnetic induction, diamagnetism, and then put forth the laws of electrolysis. He invented the electromagnetic rotary devices, which laid the foundation for the development of the electric motors, which today are the main workhorses of most industries.',
        image: './assets/scientist/Faraday.jpg',
        altText: 'Michael Faraday Image',
    },

    {
        name: 'Alexander Graham Bell (1857 - 1922)',
        title: 'Famous scientist',
        info: 'It was during his experiments with the telegraph that Alexander Graham Bell thought up the concept of the telephone, which, without a question, is one of the most useful inventions of all time. Bell himself, however, considered the telephone to be intruding, and did not have a telephone at his place of work.',
        image: './assets/scientist/Graham_bell.jpg',
        altText: 'Alexander Graham Bell Image',
    },

    {
        name: 'Albert Einstein (1879 – 1955)',
        title: 'German theoretical physicist',
        info: 'He was wholly responsible for the development of the modern theory of gravity, and partly responsible for the development of quantum mechanics, both of which are the pillars of modern physics. His special and general theories of relativity have captured the minds of the scientific community for decades, and are thought to be so complex that very few people are able to actually grasp their full extent. Einstein is best known for his equation E=mc2, which gives the relation between energy and mass, and forms the basis of atomic energy generation.',
        image: './assets/scientist/Einstein.jpg',
        altText: 'Albert Einstein Image',
    },
]


const scientist = document.getElementById('scientist');

// All scientist

const allScientist = document.createElement('ul')
allScientist.className = 'allScientist';
scientist.appendChild(allScientist);

// Individual scientist

scientistInfo.forEach((individual) => {
    const eachScientist = document.createElement('li');
    eachScientist.className = 'eachScientist';
    allScientist.appendChild(eachScientist);

    const scientistImg = document.createElement('div');
    scientistImg.className = 'scientistImg';
    scientistImg.innerHTML = `<img src=${individual.image} alt=${individual.altText}>`;
    eachScientist.appendChild(scientistImg);

    const scientistInfo = document.createElement('div');
    scientistInfo.className = 'scientistInfo';
    eachScientist.appendChild(scientistInfo);

    const scientistName = document.createElement('h3');
    scientistName.className = 'scientistName';
    scientistName.innerText = `${individual.name}`;
    scientistInfo.appendChild(scientistName);

    const scientistTitle = document.createElement('p');
    scientistTitle.className = 'scientistTitle';
    scientistTitle.innerHTML = `${individual.title}`;
    scientistInfo.appendChild(scientistTitle);

    const separator = document.createElement('div');
    separator.className = 'separator';
    scientistInfo.appendChild(separator);

    const scientistDesc = document.createElement('p');
    scientistDesc.className = 'scientistDesc';
    scientistDesc.innerHTML = `${individual.info}`;
    scientistInfo.appendChild(scientistDesc);
}
);










