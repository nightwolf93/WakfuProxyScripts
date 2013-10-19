/* Packet 2048 */

function parseID(){
	packet.ReadLong("CharacterID");
};

function parseIdentity(){
	packet.ReadByte("idType?");
	packet.ReadLong("Owner");
};

function parseAppearence(){
	packet.ReadByte("Sex");
	packet.ReadByte("SkinColor");
	packet.ReadByte("HairColor");
	packet.ReadByte("PupilColor");
	packet.ReadByte("SkinColorFactor");
	packet.ReadByte("HairColorFactor")
	packet.ReadByte("Cloth")
	packet.ReadByte("Face")
	packet.ReadShort("Title");
};

function parseEquip(){
	var equipCount = packet.ReadByte("EquipCount");
	for(var i = 0; i < equipCount; i++){
		packet.ReadByte("Slot[" + i + "]");
		packet.ReadInt("Skin Slot[" + i + "]");
	}
};

function parseXp(){
	packet.ReadLong("XP?");
	packet.ReadShort("FreePoint?");
	var idc = packet.ReadShort("??");
	for(var i = 0; i < idc; i++){
		packet.ReadByte("??[" + i + "]");
		packet.ReadShort("??[" + i + "]");
	}
	var idc = packet.ReadShort("??");
	for(var i = 0; i < idc; i++){
		packet.ReadByte("??[" + i + "]");
		packet.ReadShort("??[" + i + "]");
	}
	packet.ReadInt("Gauge");
};

var count = packet.ReadByte("CharactersCount");
for(var i = 0; i < count; i++){
	packet.Log("=> Parse character [" + i + "]");
	packet.ReadShort("Mark?");
	packet.ReadByte("BlockType?");
	parseID();
	parseIdentity();
	packet.ReadBigString("Name");
	packet.ReadShort("Breed");
	parseAppearence();
	parseEquip();
	packet.ReadByte("CreationData?");
	parseXp();
	packet.ReadInt("Nation");
}