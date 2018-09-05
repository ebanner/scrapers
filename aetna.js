//
// Extract doctor name and phone number from listing of doctors from a aetna url.
// e.g. https://member.aetna.com/secure/member/?v43#/contentPage?page=providerResults
//

//
// Extract doctor name and phone number from a listing entry.
//
function unpack(entry) {
    doctor = entry.getElementsByClassName('providerNameDetails')[0].text
    phoneNumber = entry.getElementsByClassName('mobileMarT20')[1].children[1].textContent
    return [doctor, phoneNumber]
}

//
// Get providers list.
//
entries = document.querySelector('#providerResults > div.container.mobile-container.gridContainer > div.dataGrid > div.dataGridTable.clearfix > div.dataGridTableContant');

//
// Unpack each provider along with their phone number.
//
for (i = 0; i < entries.children.length; i++) {
    entry = entries.children[i];
    try {
        info = unpack(entry);
	console.log(info);
    } catch (err) {
        console.log('err');
    }
}
