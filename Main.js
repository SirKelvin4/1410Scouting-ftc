//put url here:
let url = 'https://7c89-2601-282-380-6a20-b578-fbac-d5ad-a49c.ngrok.io';











let DDA = false, DOF = false, PA = false, CSCD = false, FSU = 0, F1SH = 0, F2SH = 0, F3SH = 0, FSSH = 0, SHB = 0, DDEG = 0, CSE = false;
const close = document.getElementById("close");
const closeQR = document.getElementById("closeQR");
const modal = document.getElementById("modal");
const modalQR = document.getElementById("modalQR");
const SendBtn = document.getElementById("send");
const QRBtn = document.getElementById("qr");


let rqst = new XMLHttpRequest();
let type = "POST"
let qr;

(function() {
    qr = new QRious({
        element: document.getElementById('qr-code'),
        size: 200,
    });
})();

function generateQRCode() {
    qr.set({
        foreground: 'black',
        size: 200,
        value: JSON.stringify({
            Scout_Name: document.getElementById("Scout Name").value.toString(),
            Team_Number: document.getElementById("Team Number").value.toString(),
            Alliance_Station: document.getElementById("Alliance Station").value.toString(),
            Ducks_Delivered_Auto: DDA.toString(),
            Team_Scoring_Element_On_Field: DOF.toString(),
            Parking_Auto: PA.toString(),
            Cargo_Same_Color_As_Duck: CSCD.toString(),
            Freight_In_Storage_Unit: FSU.toString(),
            Freight_On_Lvl_1_Of_Shipping_Hub: F1SH.toString(),
            Freight_On_Lvl_2_Of_Shipping_Hub: F2SH.toString(),
            Freight_On_Lvl_3_Of_Shipping_Hub: F3SH.toString(),
            Shipping_Hub_Balanced: SHB.toString(),
            Ducks_Delivered_Endgame: DDEG.toString(),
            Cap_Shipping_Element: CSE.toString(),
            // Auto_Wobble_Correct_Zone: document.getElementById("AWCZ").value.toString(),

            // Endgame_Wobble_Start_Line: document.getElementById("EWSL").value.toString(),
            // Endgame_Wobble_Drop_Zone: document.getElementById("EWDZ").value.toString(),
            // Endgame_Wobble_Rings : document.getElementById("EWR").value.toString(),

            // Penalty_Major: PMA.toString(),
            // Penalty_Minor: PMI.toString(),
        })
    });
}


// function detectMobile() {
//     return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) //True if on mobile, false if not
// }
//
// function touchDetect(event, variable) {
//     if (event.targetTouches > 1) { //2 Finger Detection
//         variable--;
//     }
// }

function openTab(evt, tabName) {
    let i, tabContent, tabLink;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLink = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLink.length; i++) {
        tabLink[i].className = tabLink[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
}

function resetVar() {
    DDA = false, DOF = 0, PA = 0, CSCD = false, FSU = 0, F1SH = 0, F2SH = 0, F3SH = 0, FSSH = 0, SHB = false, DDEG = 0, CSE = false;

    DDAMain.innerText = 'Ducks Delivered Auto: False';
    DOFMain.innerText = 'Ducks on Field: ' + DOF.toString();
    PAMain.innerText = 'Where did they park in Auto: Didnt park';
    CSCDMain.innerText = 'Cargo Same Color as Duck: False';

    FSUMain.innerText = 'Freight in Storage Unit: ' + FSU.toString();
    F1SHMain.innerText = 'Freight on 1st level of Storage Hub: ' + F1SH.toString();
    F2SHMain.innerText = 'Freight on 2nd level of Storage Hub: ' + F2SH.toString();
    F3SHMain.innerText = 'Freight on 3rd level of Storage Hub: ' + F3SH.toString();

    SHBMain.innerText = 'Shipping Hub Balanced: False';
    DDEGMain.innerText = 'Ducks Delivered End Game: ' + DDEG.toString();
    CSEMain.innerText = 'Capped Shipping Element: False';

    document.getElementById("Team_Number").selectedIndex = 0;
    document.getElementById("Alliance_Station").selectedIndex = 0;

}
//all the minus buttons
DOFMinus = document.getElementById("Ducks on Field Minus"); DOFMinus.onmousedown = function () {DOF--; DOFMain.innerText = 'Ducks on Field: ' + DOF.toString();}

FSUMinus = document.getElementById("Freight in Storage Unit Minus"); FSUMinus.onmousedown = function () {FSU--; FSUMain.innerText = 'Freight in Storage unit: ' + FSU.toString();}
F1SHMinus = document.getElementById("Freight on 1st level of Storage Hub Minus"); F1SHMinus.onmousedown = function () {F1SH--; F1SHMain.innerText = 'Freight on 1st level of Storage Hub: ' + F1SH.toString();}
F2SHMinus = document.getElementById("Freight on 2nd level of Storage Hub Minus"); F2SHMinus.onmousedown = function () {F2SH--; F2SHMain.innerText = 'Freight on 2nd level of Storage Hub: ' + F2SH.toString();}
F3SHMinus = document.getElementById("Freight on 3rd level of Storage Hub Minus"); F3SHMinus.onmousedown = function () {F3SH--; F3SHMain.innerText = 'Freight on 3rd level of Storage Hub: ' + F3SH.toString();}

DDEGMinus = document.getElementById("Ducks Delivered in End Game Minus"); DDEGMinus.onmousedown = function () {DDEG--; DDEGMain.innerText = 'Ducks Delivered in End Game: ' + DDEG.toString();}

//all the normal buttons


DDABtn = document.getElementById("DDA");
DDABtn.onmousedown = function () {DDA = !DDA; if (DDA) {DDAMain.innerText = 'Duck Delivered Auto: Success';} else {DDAMain.innerText = 'Duck Delivered Auto: Failure';}}
DOFBtn = document.getElementById("DOF");
DOFBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {DOF--;} else {DOF++;}DOFBtn.innerText = 'Ducks on Field: ' + DOF.toString();}
PABtn = document.getElementById("PA");
PABtn.onmousedown = function () {PA = 0; if (PA = 0) {PAMain.innerText = 'Where did they park Auto: Partially in Alliance Storage'; PA++;} elseif (PA = 1) ;PAMain.innerText = 'Where did they park Auto: Completely in Alliance Storage'; PA++; elseif (PA = 2) ;PAMain.innerText = 'Where did they park Auto: Partially in Warehouse'; PA++; elseif (PA = 3) ;PAMain.innerText = 'Where did they park Auto: Completely in Warehouse'; PA++; elseif (PA = 4) ;PAMain.innerText = 'Where did they park Auto: Did not Park'; PA=0;;}
//Change ^^^ to for loop
CSCDBtn = document.getElementById("CSCD");
CSCDBtn.onmousedown = function () {CSCD = !CSCD; if (CSCD) {CSCDMain.innerText = 'Cargo Same Color as Duck: True';} else {CSCDMain.innerText = 'Cargo Same Color as Duck: False';}}
FSUBtn = document.getElementById("FSU");
FSUBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {FSU--;} else {FSU++;}FSUBtn.innerText = 'Freight in Storage Unit: ' + FSU.toString();}
F1SHBtn = document.getElementById("F1SH");
F1SHBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {F1SH--;} else {F1SH++;}F1SHBtn.innerText = 'Freight on 1st lvl of Shipping Hub: ' + F1SH.toString();}
F2SHBtn = document.getElementById("F2SH");
F2SHBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {F2SH--;} else {F2SH++;}F2SHBtn.innerText = 'Freight on 2nd lvl of Shipping Hub: ' + F2SH.toString();}
F3SHBtn = document.getElementById("F3SH");
F3SHBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {F3SH--;} else {F3SH++;}F3SHBtn.innerText = 'Freight on 3rd lvl of Shipping Hub: ' + F3SH.toString();}
SHBBtn = document.getElementById("SHB");
SHBBtn.onmousedown = function () {SHB = !SHB; if (SHB) {SHBMain.innerText = 'Shipping Hub Balanced: Success';} else {SHBMain.innerText = 'Shipping Hub Balanced: Failure';}}
DDEBtn = document.getElementById("DDE");
DDEBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {DDE--;} else {DDE++;}DDEBtn.innerText = 'Ducks Delivered End Game: ' + DDE.toString();}
CSEBtn = document.getElementById("CSE");
CSEBtn.onmousedown = function () {CSE = !CSE; if (CSE) {CSEMain.innerText = 'Capped Shipping Element: Success';} else {CSEMain.innerText = 'Capped Shipping Element: Failure';}}


SendBtn.onclick = function () {
    rqst.open(type, url, true);
    rqst.setRequestHeader("Content-Type", "application/json");
    rqst.send(JSON.stringify({
        Scout_Number: document.getElementById("Scout_Name").value.toString(),
        Team_Number: document.getElementById("Team_Number").value.toString(),
        Ducks_Delivered_Auto: DDA.toString(),
        Parking_Auto: PA.toString(),
        Cargo_Same_Color_As_Duck: CSCD.toString(),
        
        Freight_In_Storage_Unit: FSU.toString(),
        Freight_On_Lvl_1_Of_Shipping_Hub: F1SH.toString(),
        Freight_On_Lvl_2_Of_Shipping_Hub: F2SH.toString(),
        Freight_On_Lvl_3_Of_Shipping_Hub: F3SH.toString(),
       
        Shipping_Hub_Balanced: SHB.toString(),
        Ducks_Delivered_Endgame: DDEG.toString(),
        Cap_Shipping_Element: CSE.toString(),
        // Endgame_Wobble_Start_Line: document.getElementById("EWSL").value.toString(),
        // Endgame_Wobble_Drop_Zone: document.getElementById("EWDZ").value.toString(),
        // Endgame_Wobble_Rings : document.getElementById("EWR").value.toString(),

        // Penalty_Major: PMA.toString(),
        // Penalty_Minor: PMI.toString(),
    }));
    resetVar();
    modal.style.display = "block";
}

QRBtn.onclick = function () {
    generateQRCode();
    resetVar();
    modalQR.style.display = "block";
}

close.onclick = function () {modal.style.display = "none";}

closeQR.onclick = function () {modalQR.style.display = "none";}

window.onclick = function(event) {
    if (event.target === modal || event.target === modalQR) {
        modal.style.display = "none";
        modalQR.style.display = "none";
    }
}