/* Packet SMSG_LOGINRESULT */
// 13 = Need to define pseudo

var result = packet.ReadByte("LoginResult");

if (result == 5)
{
	packet.Log("Account is banned");
	
	if (packet.Length() >= 5)
		packet.ReadInt("BanDelay");
}
else if (result == 0)
{
	if (packet.Length() < 3)
		return;
	
	var size = packet.ReadShort("BlockSize");

	//if (packet.Length() != (size + 3))
	//	return;

	packet.ReadByte("BlockNumber");
	packet.ReadByte("BlockId");
	packet.ReadInt("BlockStart");
	packet.ReadByte("Unk");
	packet.ReadLong("AccountId");
	packet.ReadByte("Unk2");
	packet.ReadLong("SubscribeTime");
	packet.ReadInt("IsAdmin");

	packet.ReadString("Pseudo");
	packet.ReadString("Unk3");
}
else
	packet.Log("Erreur lors de la connexion : " + result);