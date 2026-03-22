const abilities = [{
  ability: `Reimu Hakurei + Kyouko Kasodani: "Capable of floating through reality while reflecting sound waves."`
}, {
  ability: `Koishi Komeiji + Tsukasa Kudamaki: "Capable of slipping into the weakest spots of one's soul without the target ever realizing."`
}, {
  ability: `Utsuho Reiuji + Nue Houjuu: "Capable of disguising nuclear fusion as useless objects."`
}, {
  ability: `Doremy Sweet + Alice Margatroid: "Capable of utilizing dolls by eating and controlling dreams."`
}, {
  ability: `Shou Toramaru + Raiko Horikawa: "Capable of finding and utilizing treasures by making them follow a rhythm."`
}, {
  ability: `Sunny Milk + Hatate Himekaidou: "Capable of refracting light to render the user invisible using thoughtography."`
}, {
  ability: `Keine Kamishirasawa + Minamitsu Murasa: "Capable of manipulating history through shipwrecks."`
}, {
  ability: `Remilia Scarlet + Mai Teireida: "Capable of draining one's fate and vitality through dancing."`
}, {
  ability: `Megumu Iizunamaru + Okina Matara: "Capable of creating interdimensional backdoors on the starry sky."`
}, {
  ability: `Hina Kagiyama + Satono Nishida: "Capable of storing people's misfortune and mental energy by dancing"`
}, {
  ability: `Patchouli Knowledge + Mayumi Joutouguu: "Capable of summoning each of the five elements by converting loyalty"`
}, {
  ability: `Hecatia Lapislazuli + Chiyari Tenkajin: "Capable of storing three bodies by absorbing into blood and fire"`
}, {
  ability: `Parsee Mizuhashi + Renko Usami: "Capable of using jealousy by looking at the stars and the moon"`
}, {
  ability: `Eternity Larva + Minoriko Aki: "Capable of scattering abundant harvest into scales"`
}, {
  ability: `Hatate Himekaidou + Ichirin Kumoi: "Capable of wielding nyuudou using thoughtography"`
}, {
  ability: `Aya Shameimaru + Shion Yorigami: "Capable of making people unlucky including herself by using and controlling wind"`
}, {
  ability: `Marisa Kirisame + Saki Kurokoma: "Capable of utilizing magic through an unmatched leg strength"`
}, {
  ability: `Yuyuko Saigyouji + Mayumi Joutouguu: "Capable of turning loyalty directly into death"`
}, {
  ability: `Alice Margatroid + Shinmyoumaru Sukuna: "Capable of utilizing dolls through the Miracle Mallet"`
}, {
  ability: `Medicine Melancholy + Seija Kijin: "Capable of reversing everything that is beneficial with poison"`
}, {
  ability: `Reimu Hakurei + Kyouko Kasodani: "Capable of floating through reality while reflecting sound waves."`
}, {
  ability: `Sunny Milk + Daiyousei: "Capable of retracting light to the user while invisibly swimming through the mist"`
}, {
  ability: `Marisa Kirisame + Maribel Hearn: "Capable of using magic through seeing boundaries"`
}, {
  ability: `Letty Whiterock + Takane Yamashiro: "Capable of converting chill/winter itself into forest's qi"`
}, {
  ability: `Koakuma + Seija Kijin: "Capable of finding a targetted book through reversing everything"`
}, {
  ability: `Flandre Scarlet + Son Biten: "Capable of summoning wild monkeys by destroying anything"`
}, {
  ability: `Star Sapphire + Shinmyoumaru Sukuna: "Capable of detecting movements through the Miracle Mallet"`
}, {
  ability: `Tewi Inaba + Chen: "Capable of using sorcery converting to good luck"`
}, {
  ability: `Hisami Yomotsu + Okina Matara: "Capable of creating interdimensional backdoors to never let anything slip out of her grasp"`
}, {
  ability: `Zanmu Nippaku + Nazrin: "Capable of finding specific objects through a user's nothingness"`
}, {
  ability: `Shizuha Aki + Keine Kamishirasawa: "Capable of manipulating history through autumn leaves"`
}, {
  ability: `Kagerou Imaizumi + Lily White: "Capable of announcing spring by transforming into a wolf"`
}, {
  ability: `Reimu Hakurei + Raiko Horikawa: "Capable of floating and aura through following the rhythm"`
}, {
  ability: `Sunny Milk + Urumi Ushizaki: "Capable of changing weights of the selected objects by retracting light"`
}, {
  ability: `Yukari Yakumo + Sannyo Komakusa: "Capable of influencing space and boundaries with tobacco smoke"`
}, {
  ability: `Satori Komeiji + Kosuzu Motoori: "Capable of deciphering books by reading others' minds"`
}, {
  ability: `Tsukasa Kudamaki + Medicine Melancholy: "Capable of slipping one's weak soul through using poison"`
}, {
  ability: `Suwako Moriya + Mike Goutokuji: "Capable of creating earth through attracting money and customers (not both of them, this is done in seperate ways)"`
}, {
  ability: `Yachie Kicchou + Mystia Lorelei: "Capable of driving others insane by singing and night blinding through making them lose the will to fight"`
}, {
  ability: `Koishi Komeiji + Lily White: "Capable of announcing spring without telling others"`
}, {
  ability: `Wakasagihime + Yuuka Kazami: "Capable of increasing her own strength using water and flowers"`
}, {
  ability: `Benben Tsukumo + Yuuka Kazami: "Capable of letting flowers grow by playing illusionary notes."`
}, {
  ability: `Eirin Yagokoro + Iku Nagae: "Capable of reading the atmosphere of any situation while forging medicine."`
}, {
  ability: `Kutaka Niwatari + Yoshika Miyako: "Capable of healing illnesses while consuming incoming harm."`
}, {
  ability: `Kogasa Tatara + Nemuno Sakata: "Capable of blacksmithing a perfect sanctuary and surprising visitors."`
}, {
  ability: `Hina Kagiyama + Junko: "Capable of redefining anything and leaving behind only misfortune."`
}, {
  ability: `Kasen Ibaraki + Sakuya Izayoi: "Capable of guiding animals to ignore time maniplation."`
}, {
  ability: `Shiki Eiki, Yamaxanadu + Sagume Kishin: "Capable of judging and reversing a target's sin."`
}];

let btn = document.querySelector("#Abtn");
let ability = document.querySelector(".ability");

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * abilities.length);
    
    ability.innerHTML = abilities[random].ability;
});
