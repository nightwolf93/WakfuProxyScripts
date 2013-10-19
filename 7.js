/* Packet CMSG_VERSION */

function DecodeVersion(){
	packet.ReadByte("Version");
	packet.ReadShort("Revision");
	packet.ReadByte("Change");
	packet.ReadString("Build");
};

DecodeVersion();