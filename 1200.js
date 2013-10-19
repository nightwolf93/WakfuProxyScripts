/* Packet SMSG_LISTWORLDS */

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