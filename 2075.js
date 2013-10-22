/* Packet 2075 */
// Envois de la tentative de réponse a la suppresion de personnage

packet.ReadLong('CharacterID');
packet.ReadByte('??');
packet.ReadString('Answer');