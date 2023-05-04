const kitap_form = document.getElementById("kitap_form");
const kitap_adi = document.getElementById("kitap_adi");
const kitap_drop = document.getElementById("kitap_drop");
const kitap_sayfa = document.getElementById("kitap_sayfa");
const kitap_yazar = document.getElementById("kitap_yazar");
const kitap_yayin = document.getElementById("kitap_yayin");
const kitap_basim = document.getElementById("kitap_basim");

kitap_form.addEventListener("submit", take_data);

async function take_data(e){
    e.preventDefault();

    let ktp_ad = kitap_adi.value;
    let ktp_drop = kitap_drop.value;
    let ktp_sayfa = kitap_sayfa.value;
    let ktp_yazar = kitap_yazar.value;
    let ktp_basim = kitap_basim.value;
    let ktp_yayin = kitap_yayin.value;

    const server = await fetch('http://localhost:3000/kitaplar',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            kit_ad:ktp_ad,
            kit_drop:ktp_drop,
            kit_sayfa:ktp_sayfa,
            kit_yazari:ktp_yazar,
            kit_yayin:ktp_yayin,
            kit_basim:ktp_basim
        })
    });

    let data = await server.json();

    alert("data is push !");
}