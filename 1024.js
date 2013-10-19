/* Packet SMSG_LOGINRESULT */

packet.ReadByte("LoginResult");
packet.ReadShort("??");
packet.ReadByte("??");
packet.ReadByte("??");
packet.ReadInt("??");
packet.ReadLong("AcountID");
packet.ReadByte("??");
packet.ReadLong("SubscribeTime");
packet.ReadInt("IsAdmin");
for(var i = 33; i < 50; i++){
	packet.ReadByte("AccountData[" + i + "]");
}
packet.ReadString("CharName");
packet.ReadString("??");
packet.ReadShort("??");