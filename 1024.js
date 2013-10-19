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

packet.Log("=== World list ===");
packet.ReadShort("Size?");
packet.ReadShort("OPCode");
packet.ReadByte("WorldSize?");
packet.ReadByte("??");
packet.ReadByte("Block?");
packet.ReadByte("??");
packet.ReadInt("??");
packet.ReadByte("??");
packet.ReadInt("??");
packet.ReadByte("??");
packet.ReadInt("??");

packet.ReadByte("??");
packet.ReadInt("WorldID");
packet.ReadString("Always the same?");
packet.ReadByte("??");
packet.ReadString("World Name");
packet.ReadString("World Language");
packet.ReadByte("??");
packet.ReadByte("Online");
packet.ReadByte("Full");
packet.ReadByte("Population");