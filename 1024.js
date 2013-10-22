/* Packet SMSG_LOGINRESULT */
// 13 = Need to define pseudo

var result = packet.ReadByte("LoginResult");
if(result == 0){
	packet.ReadShort("BlockSize");
	packet.ReadByte("??");
	packet.ReadByte("??");
	packet.ReadInt("??");
	packet.ReadLong("AccountID");
	packet.ReadByte("??");
	packet.ReadLong("SubscribeTime");
	packet.ReadInt("IsAdmin");
	for(var i = 33; i < 50; i++){
		packet.ReadByte("AccountData[" + i + "]");
	}
	packet.ReadString("CharName");
	packet.ReadString("??");
	packet.ReadShort("??");
}
else{
	packet.Log('Identifiant invalide ou compte invalide !');
}