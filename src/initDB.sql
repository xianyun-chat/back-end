#--create user 'xianyun_chat'@'localhost' identified by 'xianyun';
#--grant all on xianyun_chat.* to 'xianyun_chat'@'localhost';
use xianyun_chat;
drop table if exists ChatHistory;
drop table if exists ChatRoom;
drop table if exists User;
#-------------------------------------------------------
#--基本用户信息
#-------------------------------------------------------
CREATE TABLE User (
  UID CHAR(20) NOT NULL PRIMARY KEY,
  Password CHAR(20) NOT NULL,
  UName CHAR(20) NOT NULL DEFAULT "闲云用户"
) charset = utf8;
#-------------------------------------------------------
#--聊天室信息   
#-------------------------------------------------------
CREATE TABLE ChatRoom (
  CRID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  CRName CHAR(50) NOT NULL DEFAULT "未命名",
  CreateTime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  Creator CHAR(20) NOT NULL,
  Class CHAR(20) NOT NULL,
  UNIQUE (CRName, Creator),
  FOREIGN KEY (Creator) REFERENCES User(UID) ON DELETE CASCADE ON UPDATE CASCADE
) charset = utf8;
#-------------------------------------------------------
#--聊天历史记录
#-------------------------------------------------------
CREATE TABLE ChatHistory (
  CRID INT NOT NULL,
  UID CHAR(50) NOT NULL,
  Timestamp DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  Content CHAR(200) NOT NULL,
  PRIMARY KEY (CRID, UID, Timestamp),
  FOREIGN KEY (UID) REFERENCES User(UID) ON DELETE CASCADE ON UPDATE cascade,
  FOREIGN KEY (CRID) REFERENCES ChatRoom(CRID) ON DELETE CASCADE ON UPDATE cascade
) charset = utf8;