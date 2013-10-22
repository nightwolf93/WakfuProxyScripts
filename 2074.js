/* Packet 2074 */
// Le serveur demande la question secrète avant de delete

packet.ReadLong('CharacterID');
packet.ReadByte('??');
packet.ReadString('Question');