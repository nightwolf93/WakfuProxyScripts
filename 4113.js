/* Packet 4113 */

packet.ReadInt("X");
packet.ReadInt("Y");
packet.ReadShort("IB?");
var count = packet.ReadByte("MovementCount");
packet.Log("Movements Keys?");
for(var i = 0; i <= count; i++){
	packet.ReadByte("Cell[" + i + "]");
}