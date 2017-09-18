import {observable} from 'mobx'
import {ToastAndroid} from 'react-native'
import config from '../config'

class FileStore{

  @observable isLoading = false;
  @observable dataShow = [
    {
        "type": "dir",
        "directory_id": 1,
        "upload_id": null,
        "parent_id": 0,
        "name": "coba_file di rename",
        "info": [],
        "created_at": "2017-08-15 11:25:40",
        "updated_at": "2017-08-22 23:47:51",
        "links": []
      },
      {
        "type": "dir",
        "directory_id": 2,
        "upload_id": null,
        "parent_id": 0,
        "name": "dir_test_raw rename 2",
        "info": [],
        "created_at": "2017-08-15 12:50:12",
        "updated_at": "2017-08-22 23:54:04",
        "links": []
      },
      {
        "type": "dir",
        "directory_id": 6,
        "upload_id": null,
        "parent_id": 0,
        "name": "files",
        "info": [],
        "created_at": "2017-08-21 04:52:31",
        "updated_at": "2017-08-27 23:46:50",
        "links": []
      },
      {
        "type": "dir",
        "directory_id": 7,
        "upload_id": null,
        "parent_id": 0,
        "name": "music",
        "info": [],
        "created_at": "2017-08-21 07:50:25",
        "updated_at": "2017-08-27 23:34:18",
        "links": []
      },
      {
        "type": "dir",
        "directory_id": 9,
        "upload_id": null,
        "parent_id": 0,
        "name": "photo",
        "info": [],
        "created_at": "2017-08-22 11:34:34",
        "updated_at": "2017-08-27 23:44:19",
        "links": []
      },
      {
        "type": "dir",
        "directory_id": 10,
        "upload_id": null,
        "parent_id": 0,
        "name": "documents",
        "info": [],
        "created_at": "2017-08-22 11:35:59",
        "updated_at": "2017-08-27 23:49:33",
        "links": []
      },
      {
        "type": "dir",
        "directory_id": 11,
        "upload_id": null,
        "parent_id": 0,
        "name": "try again rename again",
        "info": [],
        "created_at": "2017-08-22 11:37:55",
        "updated_at": "2017-08-22 23:35:53",
        "links": []
      },
      {
        "type": "dir",
        "directory_id": 12,
        "upload_id": null,
        "parent_id": 0,
        "name": "create new folder ice",
        "info": [],
        "created_at": "2017-08-22 11:38:29",
        "updated_at": "2017-08-22 11:38:29",
        "links": []
      },
      {
        "type": "dir",
        "directory_id": 13,
        "upload_id": null,
        "parent_id": 0,
        "name": "tambah lagi coba rename",
        "info": [],
        "created_at": "2017-08-22 11:41:50",
        "updated_at": "2017-08-22 23:15:44",
        "links": []
      },
      {
        "type": "dir",
        "directory_id": 14,
        "upload_id": null,
        "parent_id": 0,
        "name": "test folder rename",
        "info": [],
        "created_at": "2017-08-22 19:22:01",
        "updated_at": "2017-08-22 23:09:37",
        "links": []
      },
      {
        "type": "dir",
        "directory_id": 16,
        "upload_id": null,
        "parent_id": 0,
        "name": "rename folder new way rbnm",
        "info": [],
        "created_at": "2017-08-22 22:43:36",
        "updated_at": "2017-08-26 08:22:59",
        "links": []
      },
      {
        "type": "dir",
        "directory_id": 18,
        "upload_id": null,
        "parent_id": 0,
        "name": "buat folder lagi",
        "info": [],
        "created_at": "2017-08-27 23:23:14",
        "updated_at": "2017-08-27 23:23:14",
        "links": []
      },
      {
        "type": "dir",
        "directory_id": 32,
        "upload_id": null,
        "parent_id": 0,
        "name": "alffy",
        "info": [],
        "created_at": "2017-09-03 08:31:00",
        "updated_at": "2017-09-03 12:11:31",
        "links": []
      },
      {
        "type": "file",
        "directory_id": 0,
        "upload_id": 29,
        "parent_id": null,
        "name": "FB_IMG_1496697457199.jpg",
        "info": {
          "str_id": "8Z7ZPUdr",
          "size": 11738,
          "mime_type": "image/jpeg",
          "client_name": "FB_IMG_1496697457199.jpg",
          "client_extension": "jpg",
          "client_mime_type": "image/jpeg"
        },
        "created_at": "2017-09-02 04:31:18",
        "updated_at": "2017-09-02 04:31:18",
        "links": [
          {
            "id": 85,
            "upload_id": 29,
            "url": "https://drive.google.com/uc?id=0BxzXl76nV9ktMmY3QzdobkhqcE0",
            "json_response": {
              "error": null,
              "data": {
                "appProperties": null,
                "createdTime": null,
                "description": null,
                "explicitlyTrashed": null,
                "fileExtension": null,
                "folderColorRgb": null,
                "fullFileExtension": null,
                "hasAugmentedPermissions": null,
                "hasThumbnail": null,
                "headRevisionId": null,
                "iconLink": null,
                "id": "0BxzXl76nV9ktMmY3QzdobkhqcE0",
                "isAppAuthorized": null,
                "kind": "drive#file",
                "md5Checksum": null,
                "mimeType": "image/jpeg",
                "modifiedByMe": null,
                "modifiedByMeTime": null,
                "modifiedTime": null,
                "name": "8Z7ZPUdr_FB_IMG_1496697457199.jpg",
                "originalFilename": null,
                "ownedByMe": null,
                "parents": null,
                "properties": null,
                "quotaBytesUsed": null,
                "shared": null,
                "sharedWithMeTime": null,
                "size": null,
                "spaces": null,
                "starred": null,
                "teamDriveId": null,
                "thumbnailLink": null,
                "thumbnailVersion": null,
                "trashed": null,
                "trashedTime": null,
                "version": null,
                "viewedByMe": null,
                "viewedByMeTime": null,
                "viewersCanCopyContent": null,
                "webContentLink": null,
                "webViewLink": null,
                "writersCanShare": null
              },
              "permission": {
                "allowFileDiscovery": false,
                "displayName": null,
                "domain": null,
                "emailAddress": null,
                "expirationTime": null,
                "id": "anyoneWithLink",
                "kind": "drive#permission",
                "photoLink": null,
                "role": "reader",
                "type": "anyone"
              }
            },
            "vendor": "GDRIVE",
            "status": "SUCCESS",
            "created_at": "2017-09-02 04:31:18",
            "updated_at": "2017-09-02 04:31:22"
          },
          {
            "id": 86,
            "upload_id": 29,
            "url": "https://www.dropbox.com/s/oxougtwqqc5tlag/8Z7ZPUdr_FB_IMG_1496697457199.jpg?dl=0",
            "json_response": {
              "error": null,
              "data": {
                "name": "8Z7ZPUdr_FB_IMG_1496697457199.jpg",
                "path_lower": "/uploaded/8z7zpudr_fb_img_1496697457199.jpg",
                "path_display": "/UPLOADED/8Z7ZPUdr_FB_IMG_1496697457199.jpg",
                "id": "id:B56VYtI6hBAAAAAAAAAALQ",
                "client_modified": "2017-09-02T04:31:24Z",
                "server_modified": "2017-09-02T04:31:24Z",
                "rev": "4f5603a328",
                "size": 11738,
                "content_hash": "654a1cec43c2a732a585ddbfd15e6c6629d4da3c342ba9d1b2817ea2fb928005"
              },
              "permission": {
                ".tag": "file",
                "url": "https://www.dropbox.com/s/oxougtwqqc5tlag/8Z7ZPUdr_FB_IMG_1496697457199.jpg?dl=0",
                "id": "id:B56VYtI6hBAAAAAAAAAALQ",
                "name": "8Z7ZPUdr_FB_IMG_1496697457199.jpg",
                "path_lower": "/uploaded/8z7zpudr_fb_img_1496697457199.jpg",
                "link_permissions": {
                  "resolved_visibility": {
                    ".tag": "public"
                  },
                  "requested_visibility": {
                    ".tag": "public"
                  },
                  "can_revoke": true
                },
                "client_modified": "2017-09-02T04:31:24Z",
                "server_modified": "2017-09-02T04:31:24Z",
                "rev": "4f5603a328",
                "size": 11738
              }
            },
            "vendor": "DROPBOX",
            "status": "SUCCESS",
            "created_at": "2017-09-02 04:31:18",
            "updated_at": "2017-09-02 04:31:26"
          },
          {
            "id": 87,
            "upload_id": 29,
            "url": "https://1drv.ms/u/s!AgrfpxdLXL71gRptwrncQJcDdcbg",
            "json_response": {
              "error": null,
              "data": {
                "@odata.context": "https://api.onedrive.com/v1.0/$metadata#drives('me')/items('F5BE5C4B17A7DF0A%2521105')/children/$entity",
                "@content.downloadUrl": "https://ijo5mw.dm2302.livefilestore.com/y4pEi2GH2vtIZcgVHt_ilhFdZkxlgqo5gN9ssy6-WOkhetIv8XNBmiqW2e3wI3RNqAJ_DYnoumumxfBVAy8efZFfJolIpuRm66Ss6wdk6TbdA8WJxqdtZ-PscN6HPsaJDPbpg5j1sH1AegNc4xr1gynTBofUvOG39kBeO_tmUR4-ol8iRSJqQfNfmqeo-mEjEzGKYc9ZlIfoOGM3DI9IcKiQf9mumBbbv0_mhYQVa3zXas",
                "createdBy": {
                  "application": {
                    "displayName": "Mirrorizer",
                    "id": "401de507"
                  },
                  "user": {
                    "displayName": "Muhamm Shidiq",
                    "id": "f5be5c4b17a7df0a"
                  }
                },
                "createdDateTime": "2017-09-02T04:31:30.71Z",
                "cTag": "aYzpGNUJFNUM0QjE3QTdERjBBITE1NC4yNTc",
                "eTag": "aRjVCRTVDNEIxN0E3REYwQSExNTQuMA",
                "id": "F5BE5C4B17A7DF0A!154",
                "lastModifiedBy": {
                  "application": {
                    "displayName": "Mirrorizer",
                    "id": "401de507"
                  },
                  "user": {
                    "displayName": "Muhamm Shidiq",
                    "id": "f5be5c4b17a7df0a"
                  }
                },
                "lastModifiedDateTime": "2017-09-02T04:31:30.71Z",
                "name": "8Z7ZPUdr_FB_IMG_1496697457199.jpg",
                "parentReference": {
                  "driveId": "f5be5c4b17a7df0a",
                  "id": "F5BE5C4B17A7DF0A!105",
                  "name": "UPLOADED",
                  "path": "/drive/root:/UPLOADED"
                },
                "size": 11738,
                "webUrl": "https://1drv.ms/i/s!AArfpxdLXL71gRo",
                "file": {
                  "hashes": {
                    "sha1Hash": "4E5931F2056B2A072D0900E37D80147903D0B55C"
                  },
                  "mimeType": "image/jpeg",
                  "processingMetadata": true
                },
                "fileSystemInfo": {
                  "createdDateTime": "2017-09-02T04:31:30.71Z",
                  "lastModifiedDateTime": "2017-09-02T04:31:30.71Z"
                }
              },
              "permission": {
                "@odata.context": "https://api.onedrive.com/v1.0/$metadata#drives('me')/items('F5BE5C4B17A7DF0A%21154')/permissions/$entity",
                "id": "UfiyfYUTvYc5F414axMMASp3zbc",
                "link": {
                  "application": {
                    "id": "401de507"
                  },
                  "type": "view",
                  "webUrl": "https://1drv.ms/u/s!AgrfpxdLXL71gRptwrncQJcDdcbg"
                },
                "roles": [
                  "read"
                ],
                "shareId": "s!AgrfpxdLXL71gRptwrncQJcDdcbg",
                "expirationDateTime": "0001-01-01T00:00:00Z",
                "hasPassword": false
              }
            },
            "vendor": "ONEDRIVE",
            "status": "SUCCESS",
            "created_at": "2017-09-02 04:31:18",
            "updated_at": "2017-09-02 04:31:30"
          }
        ]
      },
      {
        "type": "file",
        "directory_id": 0,
        "upload_id": 41,
        "parent_id": null,
        "name": "india_scenery (3)_&_ebad4c6b-71f2-4de5-b196-cbd27456f360.jpg",
        "info": {
          "str_id": "BwN5pAKs",
          "size": 981074,
          "mime_type": "image/jpeg",
          "client_name": "india_scenery (3)_&_ebad4c6b-71f2-4de5-b196-cbd27456f360.jpg",
          "client_extension": "jpg",
          "client_mime_type": "image/jpeg"
        },
        "created_at": "2017-09-10 20:37:42",
        "updated_at": "2017-09-10 20:37:42",
        "links": [
          {
            "id": 121,
            "upload_id": 41,
            "url": "https://drive.google.com/uc?id=0BxzXl76nV9ktRHlPckVXSG9jajA",
            "json_response": {
              "error": null,
              "data": {
                "appProperties": null,
                "createdTime": null,
                "description": null,
                "explicitlyTrashed": null,
                "fileExtension": null,
                "folderColorRgb": null,
                "fullFileExtension": null,
                "hasAugmentedPermissions": null,
                "hasThumbnail": null,
                "headRevisionId": null,
                "iconLink": null,
                "id": "0BxzXl76nV9ktRHlPckVXSG9jajA",
                "isAppAuthorized": null,
                "kind": "drive#file",
                "md5Checksum": null,
                "mimeType": "image/jpeg",
                "modifiedByMe": null,
                "modifiedByMeTime": null,
                "modifiedTime": null,
                "name": "BwN5pAKs_india_scenery (3)_&_ebad4c6b-71f2-4de5-b196-cbd27456f360.jpg",
                "originalFilename": null,
                "ownedByMe": null,
                "parents": null,
                "properties": null,
                "quotaBytesUsed": null,
                "shared": null,
                "sharedWithMeTime": null,
                "size": null,
                "spaces": null,
                "starred": null,
                "teamDriveId": null,
                "thumbnailLink": null,
                "thumbnailVersion": null,
                "trashed": null,
                "trashedTime": null,
                "version": null,
                "viewedByMe": null,
                "viewedByMeTime": null,
                "viewersCanCopyContent": null,
                "webContentLink": null,
                "webViewLink": null,
                "writersCanShare": null
              },
              "permission": {
                "allowFileDiscovery": false,
                "displayName": null,
                "domain": null,
                "emailAddress": null,
                "expirationTime": null,
                "id": "anyoneWithLink",
                "kind": "drive#permission",
                "photoLink": null,
                "role": "reader",
                "type": "anyone"
              }
            },
            "vendor": "GDRIVE",
            "status": "SUCCESS",
            "created_at": "2017-09-10 20:37:42",
            "updated_at": "2017-09-10 20:37:47"
          },
          {
            "id": 122,
            "upload_id": 41,
            "url": "https://www.dropbox.com/s/llo24lmob0h3s38/BwN5pAKs_india_scenery%20%283%29_%26_ebad4c6b-71f2-4de5-b196-cbd27456f360.jpg?dl=0",
            "json_response": {
              "error": null,
              "data": {
                "name": "BwN5pAKs_india_scenery (3)_&_ebad4c6b-71f2-4de5-b196-cbd27456f360.jpg",
                "path_lower": "/uploaded/bwn5paks_india_scenery (3)_&_ebad4c6b-71f2-4de5-b196-cbd27456f360.jpg",
                "path_display": "/UPLOADED/BwN5pAKs_india_scenery (3)_&_ebad4c6b-71f2-4de5-b196-cbd27456f360.jpg",
                "id": "id:B56VYtI6hBAAAAAAAAAAOQ",
                "client_modified": "2017-09-10T20:37:50Z",
                "server_modified": "2017-09-10T20:37:50Z",
                "rev": "5b5603a328",
                "size": 981074,
                "content_hash": "1e80da9320013339b632c41ceca7f72e6b3ce52dc9245b266859e6415044ea85"
              },
              "permission": {
                ".tag": "file",
                "url": "https://www.dropbox.com/s/llo24lmob0h3s38/BwN5pAKs_india_scenery%20%283%29_%26_ebad4c6b-71f2-4de5-b196-cbd27456f360.jpg?dl=0",
                "id": "id:B56VYtI6hBAAAAAAAAAAOQ",
                "name": "BwN5pAKs_india_scenery (3)_&_ebad4c6b-71f2-4de5-b196-cbd27456f360.jpg",
                "path_lower": "/uploaded/bwn5paks_india_scenery (3)_&_ebad4c6b-71f2-4de5-b196-cbd27456f360.jpg",
                "link_permissions": {
                  "resolved_visibility": {
                    ".tag": "public"
                  },
                  "requested_visibility": {
                    ".tag": "public"
                  },
                  "can_revoke": true
                },
                "client_modified": "2017-09-10T20:37:50Z",
                "server_modified": "2017-09-10T20:37:50Z",
                "rev": "5b5603a328",
                "size": 981074
              }
            },
            "vendor": "DROPBOX",
            "status": "SUCCESS",
            "created_at": "2017-09-10 20:37:42",
            "updated_at": "2017-09-10 20:37:52"
          },
          {
            "id": 123,
            "upload_id": 41,
            "url": "https://1drv.ms/u/s!AgrfpxdLXL71gSYdvkx9Tv4YWsgs",
            "json_response": {
              "error": null,
              "data": {
                "@odata.context": "https://api.onedrive.com/v1.0/$metadata#drives('me')/items('F5BE5C4B17A7DF0A%2521105')/children/$entity",
                "@content.downloadUrl": "https://ijo5mw.dm2302.livefilestore.com/y4pp-7p_Obyy4IYijVvL99kAd8YLQ5SSXRtw_5X7qPQn0PmTk3ewBkDWsNRlnOVasbvbXmk4jLjFMrEx_KU9Y53z09Iyuc_Mq648EkztQemGcirAraTpD5q-N16VzNzsq11NEbtv0IT122DX5KobXccpsUh7nSmKSHBSF4dN1AIgL_lYeI6lNtVqtDwJW99s9Yoi7jJIBA17aijosfMUcVmr-c378icxzQjl3wRlYTwXvU",
                "createdBy": {
                  "application": {
                    "displayName": "Mirrorizer",
                    "id": "401de507"
                  },
                  "user": {
                    "displayName": "Muhamm Shidiq",
                    "id": "f5be5c4b17a7df0a"
                  }
                },
                "createdDateTime": "2017-09-10T20:37:58.707Z",
                "cTag": "aYzpGNUJFNUM0QjE3QTdERjBBITE2Ni4yNTc",
                "eTag": "aRjVCRTVDNEIxN0E3REYwQSExNjYuMA",
                "id": "F5BE5C4B17A7DF0A!166",
                "lastModifiedBy": {
                  "application": {
                    "displayName": "Mirrorizer",
                    "id": "401de507"
                  },
                  "user": {
                    "displayName": "Muhamm Shidiq",
                    "id": "f5be5c4b17a7df0a"
                  }
                },
                "lastModifiedDateTime": "2017-09-10T20:37:58.707Z",
                "name": "BwN5pAKs_india_scenery (3)_&_ebad4c6b-71f2-4de5-b196-cbd27456f360.jpg",
                "parentReference": {
                  "driveId": "f5be5c4b17a7df0a",
                  "id": "F5BE5C4B17A7DF0A!105",
                  "name": "UPLOADED",
                  "path": "/drive/root:/UPLOADED"
                },
                "size": 981074,
                "webUrl": "https://1drv.ms/i/s!AArfpxdLXL71gSY",
                "file": {
                  "hashes": {
                    "sha1Hash": "9A7E526E38782954577FA97970CC27D59797188C"
                  },
                  "mimeType": "image/jpeg",
                  "processingMetadata": true
                },
                "fileSystemInfo": {
                  "createdDateTime": "2017-09-10T20:37:58.706Z",
                  "lastModifiedDateTime": "2017-09-10T20:37:58.706Z"
                }
              },
              "permission": {
                "@odata.context": "https://api.onedrive.com/v1.0/$metadata#drives('me')/items('F5BE5C4B17A7DF0A%21166')/permissions/$entity",
                "id": "dV69-dlhU6ooDPJFhGg_mfIE0DA",
                "link": {
                  "application": {
                    "id": "401de507"
                  },
                  "type": "view",
                  "webUrl": "https://1drv.ms/u/s!AgrfpxdLXL71gSYdvkx9Tv4YWsgs"
                },
                "roles": [
                  "read"
                ],
                "shareId": "s!AgrfpxdLXL71gSYdvkx9Tv4YWsgs",
                "expirationDateTime": "0001-01-01T00:00:00Z",
                "hasPassword": false
              }
            },
            "vendor": "ONEDRIVE",
            "status": "SUCCESS",
            "created_at": "2017-09-10 20:37:42",
            "updated_at": "2017-09-10 20:37:59"
          }
        ]
      },
      {
        "type": "file",
        "directory_id": 0,
        "upload_id": 42,
        "parent_id": null,
        "name": "IMG_20160424_145140.jpg",
        "info": {
          "str_id": "2QigVqQK",
          "size": 1842630,
          "mime_type": "image/jpeg",
          "client_name": "IMG_20160424_145140.jpg",
          "client_extension": "jpg",
          "client_mime_type": "image/jpeg"
        },
        "created_at": "2017-09-10 21:34:31",
        "updated_at": "2017-09-10 21:34:31",
        "links": [
          {
            "id": 124,
            "upload_id": 42,
            "url": "https://drive.google.com/uc?id=0BxzXl76nV9ktdWZXUFpLcUE3YTA",
            "json_response": {
              "error": null,
              "data": {
                "appProperties": null,
                "createdTime": null,
                "description": null,
                "explicitlyTrashed": null,
                "fileExtension": null,
                "folderColorRgb": null,
                "fullFileExtension": null,
                "hasAugmentedPermissions": null,
                "hasThumbnail": null,
                "headRevisionId": null,
                "iconLink": null,
                "id": "0BxzXl76nV9ktdWZXUFpLcUE3YTA",
                "isAppAuthorized": null,
                "kind": "drive#file",
                "md5Checksum": null,
                "mimeType": "image/jpeg",
                "modifiedByMe": null,
                "modifiedByMeTime": null,
                "modifiedTime": null,
                "name": "2QigVqQK_IMG_20160424_145140.jpg",
                "originalFilename": null,
                "ownedByMe": null,
                "parents": null,
                "properties": null,
                "quotaBytesUsed": null,
                "shared": null,
                "sharedWithMeTime": null,
                "size": null,
                "spaces": null,
                "starred": null,
                "teamDriveId": null,
                "thumbnailLink": null,
                "thumbnailVersion": null,
                "trashed": null,
                "trashedTime": null,
                "version": null,
                "viewedByMe": null,
                "viewedByMeTime": null,
                "viewersCanCopyContent": null,
                "webContentLink": null,
                "webViewLink": null,
                "writersCanShare": null
              },
              "permission": {
                "allowFileDiscovery": false,
                "displayName": null,
                "domain": null,
                "emailAddress": null,
                "expirationTime": null,
                "id": "anyoneWithLink",
                "kind": "drive#permission",
                "photoLink": null,
                "role": "reader",
                "type": "anyone"
              }
            },
            "vendor": "GDRIVE",
            "status": "SUCCESS",
            "created_at": "2017-09-10 21:34:31",
            "updated_at": "2017-09-10 21:34:37"
          },
          {
            "id": 125,
            "upload_id": 42,
            "url": "https://www.dropbox.com/s/krwp90voed2pt89/2QigVqQK_IMG_20160424_145140.jpg?dl=0",
            "json_response": {
              "error": null,
              "data": {
                "name": "2QigVqQK_IMG_20160424_145140.jpg",
                "path_lower": "/uploaded/2qigvqqk_img_20160424_145140.jpg",
                "path_display": "/UPLOADED/2QigVqQK_IMG_20160424_145140.jpg",
                "id": "id:B56VYtI6hBAAAAAAAAAAOg",
                "client_modified": "2017-09-10T21:34:41Z",
                "server_modified": "2017-09-10T21:34:41Z",
                "rev": "5c5603a328",
                "size": 1842630,
                "content_hash": "7ebb9ec9db1b19f11629c5cbea24653e885ed43017e307ed722df5ab6a893b3e"
              },
              "permission": {
                ".tag": "file",
                "url": "https://www.dropbox.com/s/krwp90voed2pt89/2QigVqQK_IMG_20160424_145140.jpg?dl=0",
                "id": "id:B56VYtI6hBAAAAAAAAAAOg",
                "name": "2QigVqQK_IMG_20160424_145140.jpg",
                "path_lower": "/uploaded/2qigvqqk_img_20160424_145140.jpg",
                "link_permissions": {
                  "resolved_visibility": {
                    ".tag": "public"
                  },
                  "requested_visibility": {
                    ".tag": "public"
                  },
                  "can_revoke": true
                },
                "client_modified": "2017-09-10T21:34:41Z",
                "server_modified": "2017-09-10T21:34:41Z",
                "rev": "5c5603a328",
                "size": 1842630
              }
            },
            "vendor": "DROPBOX",
            "status": "SUCCESS",
            "created_at": "2017-09-10 21:34:31",
            "updated_at": "2017-09-10 21:34:42"
          },
          {
            "id": 126,
            "upload_id": 42,
            "url": "https://1drv.ms/u/s!AgrfpxdLXL71gSeHtF2HqlHthjUs",
            "json_response": {
              "error": null,
              "data": {
                "@odata.context": "https://api.onedrive.com/v1.0/$metadata#drives('me')/items('F5BE5C4B17A7DF0A%2521105')/children/$entity",
                "@content.downloadUrl": "https://ijo5mw.dm2302.livefilestore.com/y4p1dNINL_tjQKvy-qLTfm8AWiZ79Yr1o96IN4cxPAUWIK0QLipPlmClkUZ-lBd5DcJbdxpZsNcvpLGvpE33pua4T_-jnQzJtAQ7sBs2V6puxJ0700l1dzEv7Uw0bA1bwtV4GWV934De7y-gsUZNfoT-x30-T-nKpokjuEgjrNPGxibyMDghcVeSgp7G2ayJmt7l3DvfQua6YmVU5dfXQUcKxHwxTkv1wvNYbH_mi0GLLE",
                "createdBy": {
                  "application": {
                    "displayName": "Mirrorizer",
                    "id": "401de507"
                  },
                  "user": {
                    "displayName": "Muhamm Shidiq",
                    "id": "f5be5c4b17a7df0a"
                  }
                },
                "createdDateTime": "2017-09-10T21:34:45.27Z",
                "cTag": "aYzpGNUJFNUM0QjE3QTdERjBBITE2Ny4yNTc",
                "eTag": "aRjVCRTVDNEIxN0E3REYwQSExNjcuMA",
                "id": "F5BE5C4B17A7DF0A!167",
                "lastModifiedBy": {
                  "application": {
                    "displayName": "Mirrorizer",
                    "id": "401de507"
                  },
                  "user": {
                    "displayName": "Muhamm Shidiq",
                    "id": "f5be5c4b17a7df0a"
                  }
                },
                "lastModifiedDateTime": "2017-09-10T21:34:45.27Z",
                "name": "2QigVqQK_IMG_20160424_145140.jpg",
                "parentReference": {
                  "driveId": "f5be5c4b17a7df0a",
                  "id": "F5BE5C4B17A7DF0A!105",
                  "name": "UPLOADED",
                  "path": "/drive/root:/UPLOADED"
                },
                "size": 1842630,
                "webUrl": "https://1drv.ms/i/s!AArfpxdLXL71gSc",
                "file": {
                  "hashes": {
                    "sha1Hash": "1EA882DB9BE9BCEB30244B2CB3A7512002F9A6B0"
                  },
                  "mimeType": "image/jpeg",
                  "processingMetadata": true
                },
                "fileSystemInfo": {
                  "createdDateTime": "2017-09-10T21:34:45.27Z",
                  "lastModifiedDateTime": "2017-09-10T21:34:45.27Z"
                }
              },
              "permission": {
                "@odata.context": "https://api.onedrive.com/v1.0/$metadata#drives('me')/items('F5BE5C4B17A7DF0A%21167')/permissions/$entity",
                "id": "Mw0p3rkqeHZo-237MATCt_Cvh18",
                "link": {
                  "application": {
                    "id": "401de507"
                  },
                  "type": "view",
                  "webUrl": "https://1drv.ms/u/s!AgrfpxdLXL71gSeHtF2HqlHthjUs"
                },
                "roles": [
                  "read"
                ],
                "shareId": "s!AgrfpxdLXL71gSeHtF2HqlHthjUs",
                "expirationDateTime": "0001-01-01T00:00:00Z",
                "hasPassword": false
              }
            },
            "vendor": "ONEDRIVE",
            "status": "SUCCESS",
            "created_at": "2017-09-10 21:34:31",
            "updated_at": "2017-09-10 21:34:45"
          }
        ]
      },
      {
        "type": "file",
        "directory_id": 0,
        "upload_id": 47,
        "parent_id": null,
        "name": "IMG_20160426_140035.jpg",
        "info": {
          "str_id": "cNaqf8xs",
          "size": 3161521,
          "mime_type": "image/jpeg",
          "client_name": "IMG_20160426_140035.jpg",
          "client_extension": "jpg",
          "client_mime_type": "image/jpeg"
        },
        "created_at": "2017-09-11 04:55:46",
        "updated_at": "2017-09-11 04:55:46",
        "links": [
          {
            "id": 139,
            "upload_id": 47,
            "url": "https://drive.google.com/uc?id=0BxzXl76nV9ktbEwxNHJUalpZSms",
            "json_response": {
              "error": null,
              "data": {
                "appProperties": null,
                "createdTime": null,
                "description": null,
                "explicitlyTrashed": null,
                "fileExtension": null,
                "folderColorRgb": null,
                "fullFileExtension": null,
                "hasAugmentedPermissions": null,
                "hasThumbnail": null,
                "headRevisionId": null,
                "iconLink": null,
                "id": "0BxzXl76nV9ktbEwxNHJUalpZSms",
                "isAppAuthorized": null,
                "kind": "drive#file",
                "md5Checksum": null,
                "mimeType": "image/jpeg",
                "modifiedByMe": null,
                "modifiedByMeTime": null,
                "modifiedTime": null,
                "name": "cNaqf8xs_IMG_20160426_140035.jpg",
                "originalFilename": null,
                "ownedByMe": null,
                "parents": null,
                "properties": null,
                "quotaBytesUsed": null,
                "shared": null,
                "sharedWithMeTime": null,
                "size": null,
                "spaces": null,
                "starred": null,
                "teamDriveId": null,
                "thumbnailLink": null,
                "thumbnailVersion": null,
                "trashed": null,
                "trashedTime": null,
                "version": null,
                "viewedByMe": null,
                "viewedByMeTime": null,
                "viewersCanCopyContent": null,
                "webContentLink": null,
                "webViewLink": null,
                "writersCanShare": null
              },
              "permission": {
                "allowFileDiscovery": false,
                "displayName": null,
                "domain": null,
                "emailAddress": null,
                "expirationTime": null,
                "id": "anyoneWithLink",
                "kind": "drive#permission",
                "photoLink": null,
                "role": "reader",
                "type": "anyone"
              }
            },
            "vendor": "GDRIVE",
            "status": "SUCCESS",
            "created_at": "2017-09-11 04:55:46",
            "updated_at": "2017-09-11 04:55:51"
          },
          {
            "id": 140,
            "upload_id": 47,
            "url": "https://www.dropbox.com/s/64ld4n62uctlw9q/cNaqf8xs_IMG_20160426_140035.jpg?dl=0",
            "json_response": {
              "error": null,
              "data": {
                "name": "cNaqf8xs_IMG_20160426_140035.jpg",
                "path_lower": "/uploaded/cnaqf8xs_img_20160426_140035.jpg",
                "path_display": "/UPLOADED/cNaqf8xs_IMG_20160426_140035.jpg",
                "id": "id:B56VYtI6hBAAAAAAAAAAPw",
                "client_modified": "2017-09-11T04:55:53Z",
                "server_modified": "2017-09-11T04:55:53Z",
                "rev": "615603a328",
                "size": 3161521,
                "content_hash": "f0a4fdd5ab2a5c7308858934c7182674d4634b13fc24d2eab0358032e7a1d860"
              },
              "permission": {
                ".tag": "file",
                "url": "https://www.dropbox.com/s/64ld4n62uctlw9q/cNaqf8xs_IMG_20160426_140035.jpg?dl=0",
                "id": "id:B56VYtI6hBAAAAAAAAAAPw",
                "name": "cNaqf8xs_IMG_20160426_140035.jpg",
                "path_lower": "/uploaded/cnaqf8xs_img_20160426_140035.jpg",
                "link_permissions": {
                  "resolved_visibility": {
                    ".tag": "public"
                  },
                  "requested_visibility": {
                    ".tag": "public"
                  },
                  "can_revoke": true
                },
                "client_modified": "2017-09-11T04:55:53Z",
                "server_modified": "2017-09-11T04:55:53Z",
                "rev": "615603a328",
                "size": 3161521
              }
            },
            "vendor": "DROPBOX",
            "status": "SUCCESS",
            "created_at": "2017-09-11 04:55:46",
            "updated_at": "2017-09-11 04:55:54"
          },
          {
            "id": 141,
            "upload_id": 47,
            "url": "https://1drv.ms/u/s!AgrfpxdLXL71gSyK1xt-KsQxOPXU",
            "json_response": {
              "error": null,
              "data": {
                "@odata.context": "https://api.onedrive.com/v1.0/$metadata#drives('me')/items('F5BE5C4B17A7DF0A%2521105')/children/$entity",
                "@content.downloadUrl": "https://ijo5mw.dm2302.livefilestore.com/y4pafbHBqYL73lKd5cx_kjYLvZ9ofXqHOFAapt53GZl2iNMIyzQaqCOx3mNUXd_-WJvA9-pvoefgx_2qPbUClgBLE9zdSw4t0A4lNCrrJ_yKl8C9EdIZd1moQNXckOJ9HEYO-wOvyiAI1WuWnWzR6o22_2mXGdJUc-qXXLf2kezncdC62E_LrT_XtK9UfiTA_bPs76T4PgGICSDfoqWs4-TV1KOGRY85go8j0y05ih3U6o",
                "createdBy": {
                  "application": {
                    "displayName": "Mirrorizer",
                    "id": "401de507"
                  },
                  "user": {
                    "displayName": "Muhamm Shidiq",
                    "id": "f5be5c4b17a7df0a"
                  }
                },
                "createdDateTime": "2017-09-11T04:55:55.743Z",
                "cTag": "aYzpGNUJFNUM0QjE3QTdERjBBITE3Mi4yNTc",
                "eTag": "aRjVCRTVDNEIxN0E3REYwQSExNzIuMA",
                "id": "F5BE5C4B17A7DF0A!172",
                "lastModifiedBy": {
                  "application": {
                    "displayName": "Mirrorizer",
                    "id": "401de507"
                  },
                  "user": {
                    "displayName": "Muhamm Shidiq",
                    "id": "f5be5c4b17a7df0a"
                  }
                },
                "lastModifiedDateTime": "2017-09-11T04:55:55.743Z",
                "name": "cNaqf8xs_IMG_20160426_140035.jpg",
                "parentReference": {
                  "driveId": "f5be5c4b17a7df0a",
                  "id": "F5BE5C4B17A7DF0A!105",
                  "name": "UPLOADED",
                  "path": "/drive/root:/UPLOADED"
                },
                "size": 3161521,
                "webUrl": "https://1drv.ms/i/s!AArfpxdLXL71gSw",
                "file": {
                  "hashes": {
                    "sha1Hash": "E9E3FAE6A48027DC54C1FCF56FC7ABC9B2994B92"
                  },
                  "mimeType": "image/jpeg",
                  "processingMetadata": true
                },
                "fileSystemInfo": {
                  "createdDateTime": "2017-09-11T04:55:55.743Z",
                  "lastModifiedDateTime": "2017-09-11T04:55:55.743Z"
                }
              },
              "permission": {
                "@odata.context": "https://api.onedrive.com/v1.0/$metadata#drives('me')/items('F5BE5C4B17A7DF0A%21172')/permissions/$entity",
                "id": "KdLo08fToZdOpdYVumSfcuxuQ_g",
                "link": {
                  "application": {
                    "id": "401de507"
                  },
                  "type": "view",
                  "webUrl": "https://1drv.ms/u/s!AgrfpxdLXL71gSyK1xt-KsQxOPXU"
                },
                "roles": [
                  "read"
                ],
                "shareId": "s!AgrfpxdLXL71gSyK1xt-KsQxOPXU",
                "expirationDateTime": "0001-01-01T00:00:00Z",
                "hasPassword": false
              }
            },
            "vendor": "ONEDRIVE",
            "status": "SUCCESS",
            "created_at": "2017-09-11 04:55:46",
            "updated_at": "2017-09-11 04:55:56"
          }
        ]
      },
      {
        "type": "file",
        "directory_id": 0,
        "upload_id": 49,
        "parent_id": null,
        "name": "IMG_20160508_151128.jpg",
        "info": {
          "str_id": "PKyu6ohW",
          "size": 6492487,
          "mime_type": "image/jpeg",
          "client_name": "IMG_20160508_151128.jpg",
          "client_extension": "jpg",
          "client_mime_type": "image/jpeg"
        },
        "created_at": "2017-09-11 04:59:30",
        "updated_at": "2017-09-11 04:59:30",
        "links": [
          {
            "id": 145,
            "upload_id": 49,
            "url": "https://drive.google.com/uc?id=0BxzXl76nV9ktb25jNWZmTGNibkE",
            "json_response": {
              "error": null,
              "data": {
                "appProperties": null,
                "createdTime": null,
                "description": null,
                "explicitlyTrashed": null,
                "fileExtension": null,
                "folderColorRgb": null,
                "fullFileExtension": null,
                "hasAugmentedPermissions": null,
                "hasThumbnail": null,
                "headRevisionId": null,
                "iconLink": null,
                "id": "0BxzXl76nV9ktb25jNWZmTGNibkE",
                "isAppAuthorized": null,
                "kind": "drive#file",
                "md5Checksum": null,
                "mimeType": "image/jpeg",
                "modifiedByMe": null,
                "modifiedByMeTime": null,
                "modifiedTime": null,
                "name": "PKyu6ohW_IMG_20160508_151128.jpg",
                "originalFilename": null,
                "ownedByMe": null,
                "parents": null,
                "properties": null,
                "quotaBytesUsed": null,
                "shared": null,
                "sharedWithMeTime": null,
                "size": null,
                "spaces": null,
                "starred": null,
                "teamDriveId": null,
                "thumbnailLink": null,
                "thumbnailVersion": null,
                "trashed": null,
                "trashedTime": null,
                "version": null,
                "viewedByMe": null,
                "viewedByMeTime": null,
                "viewersCanCopyContent": null,
                "webContentLink": null,
                "webViewLink": null,
                "writersCanShare": null
              },
              "permission": {
                "allowFileDiscovery": false,
                "displayName": null,
                "domain": null,
                "emailAddress": null,
                "expirationTime": null,
                "id": "anyoneWithLink",
                "kind": "drive#permission",
                "photoLink": null,
                "role": "reader",
                "type": "anyone"
              }
            },
            "vendor": "GDRIVE",
            "status": "SUCCESS",
            "created_at": "2017-09-11 04:59:30",
            "updated_at": "2017-09-11 04:59:35"
          },
          {
            "id": 146,
            "upload_id": 49,
            "url": "https://www.dropbox.com/s/dvfqlxyqe76c997/PKyu6ohW_IMG_20160508_151128.jpg?dl=0",
            "json_response": {
              "error": null,
              "data": {
                "name": "PKyu6ohW_IMG_20160508_151128.jpg",
                "path_lower": "/uploaded/pkyu6ohw_img_20160508_151128.jpg",
                "path_display": "/UPLOADED/PKyu6ohW_IMG_20160508_151128.jpg",
                "id": "id:B56VYtI6hBAAAAAAAAAAQQ",
                "client_modified": "2017-09-11T04:59:38Z",
                "server_modified": "2017-09-11T04:59:38Z",
                "rev": "635603a328",
                "size": 6492487,
                "content_hash": "cddf32f05c49eeb83eb79d3041611eec206fcd1fc0d66c070df0d3f544be7759"
              },
              "permission": {
                ".tag": "file",
                "url": "https://www.dropbox.com/s/dvfqlxyqe76c997/PKyu6ohW_IMG_20160508_151128.jpg?dl=0",
                "id": "id:B56VYtI6hBAAAAAAAAAAQQ",
                "name": "PKyu6ohW_IMG_20160508_151128.jpg",
                "path_lower": "/uploaded/pkyu6ohw_img_20160508_151128.jpg",
                "link_permissions": {
                  "resolved_visibility": {
                    ".tag": "public"
                  },
                  "requested_visibility": {
                    ".tag": "public"
                  },
                  "can_revoke": true
                },
                "client_modified": "2017-09-11T04:59:38Z",
                "server_modified": "2017-09-11T04:59:38Z",
                "rev": "635603a328",
                "size": 6492487
              }
            },
            "vendor": "DROPBOX",
            "status": "SUCCESS",
            "created_at": "2017-09-11 04:59:30",
            "updated_at": "2017-09-11 04:59:39"
          },
          {
            "id": 147,
            "upload_id": 49,
            "url": "https://1drv.ms/u/s!AgrfpxdLXL71gS5UNYgktPdly3jB",
            "json_response": {
              "error": null,
              "data": {
                "@odata.context": "https://api.onedrive.com/v1.0/$metadata#drives('me')/items('F5BE5C4B17A7DF0A%2521105')/children/$entity",
                "@content.downloadUrl": "https://ijo5mw.dm2302.livefilestore.com/y4pMueAu6KflGJuGGLPlnOE5wU8m7AOZC_ef1jxqZD5WYUtYPrRib_MWuRIqGEVwB1ftEc3jOqgLTycpp0q1HyQo2unpv6rEkceKq-xBExDRNRV8N7ggUSRCJSe1s_GTSVOE5BQe_qXVRbj_X5EDFeQrTraxw9p2y_L_K_3yHCviQgwz6I_zeKfbqUrrpe3jgIiebj15QQUIhp21iuXHUcNx_TdXAjHBUq-_9vnLQE4ejM",
                "createdBy": {
                  "application": {
                    "displayName": "Mirrorizer",
                    "id": "401de507"
                  },
                  "user": {
                    "displayName": "Muhamm Shidiq",
                    "id": "f5be5c4b17a7df0a"
                  }
                },
                "createdDateTime": "2017-09-11T04:59:42.403Z",
                "cTag": "aYzpGNUJFNUM0QjE3QTdERjBBITE3NC4yNTc",
                "eTag": "aRjVCRTVDNEIxN0E3REYwQSExNzQuMA",
                "id": "F5BE5C4B17A7DF0A!174",
                "lastModifiedBy": {
                  "application": {
                    "displayName": "Mirrorizer",
                    "id": "401de507"
                  },
                  "user": {
                    "displayName": "Muhamm Shidiq",
                    "id": "f5be5c4b17a7df0a"
                  }
                },
                "lastModifiedDateTime": "2017-09-11T04:59:42.403Z",
                "name": "PKyu6ohW_IMG_20160508_151128.jpg",
                "parentReference": {
                  "driveId": "f5be5c4b17a7df0a",
                  "id": "F5BE5C4B17A7DF0A!105",
                  "name": "UPLOADED",
                  "path": "/drive/root:/UPLOADED"
                },
                "size": 6492487,
                "webUrl": "https://1drv.ms/i/s!AArfpxdLXL71gS4",
                "file": {
                  "hashes": {
                    "sha1Hash": "1EB9583B08858177FF3451319153AB8BE88E89E9"
                  },
                  "mimeType": "image/jpeg",
                  "processingMetadata": true
                },
                "fileSystemInfo": {
                  "createdDateTime": "2017-09-11T04:59:42.403Z",
                  "lastModifiedDateTime": "2017-09-11T04:59:42.403Z"
                }
              },
              "permission": {
                "@odata.context": "https://api.onedrive.com/v1.0/$metadata#drives('me')/items('F5BE5C4B17A7DF0A%21174')/permissions/$entity",
                "id": "h4K2HRz28RcAdym8NocgcH8rWY8",
                "link": {
                  "application": {
                    "id": "401de507"
                  },
                  "type": "view",
                  "webUrl": "https://1drv.ms/u/s!AgrfpxdLXL71gS5UNYgktPdly3jB"
                },
                "roles": [
                  "read"
                ],
                "shareId": "s!AgrfpxdLXL71gS5UNYgktPdly3jB",
                "expirationDateTime": "0001-01-01T00:00:00Z",
                "hasPassword": false
              }
            },
            "vendor": "ONEDRIVE",
            "status": "SUCCESS",
            "created_at": "2017-09-11 04:59:30",
            "updated_at": "2017-09-11 04:59:42"
          }
        ]
      },
      {
        "type": "file",
        "directory_id": 0,
        "upload_id": 50,
        "parent_id": null,
        "name": "Record93.mp4",
        "info": {
          "str_id": "rbqoGlgu",
          "size": 1126301,
          "mime_type": "video/mp4",
          "client_name": "Record93.mp4",
          "client_extension": "mp4",
          "client_mime_type": "video/mp4"
        },
        "created_at": "2017-09-11 05:50:12",
        "updated_at": "2017-09-11 05:50:12",
        "links": [
          {
            "id": 148,
            "upload_id": 50,
            "url": "https://drive.google.com/uc?id=0BxzXl76nV9ktLVpRZVFNZG1hLUU",
            "json_response": {
              "error": null,
              "data": {
                "appProperties": null,
                "createdTime": null,
                "description": null,
                "explicitlyTrashed": null,
                "fileExtension": null,
                "folderColorRgb": null,
                "fullFileExtension": null,
                "hasAugmentedPermissions": null,
                "hasThumbnail": null,
                "headRevisionId": null,
                "iconLink": null,
                "id": "0BxzXl76nV9ktLVpRZVFNZG1hLUU",
                "isAppAuthorized": null,
                "kind": "drive#file",
                "md5Checksum": null,
                "mimeType": "video/mp4",
                "modifiedByMe": null,
                "modifiedByMeTime": null,
                "modifiedTime": null,
                "name": "rbqoGlgu_Record93.mp4",
                "originalFilename": null,
                "ownedByMe": null,
                "parents": null,
                "properties": null,
                "quotaBytesUsed": null,
                "shared": null,
                "sharedWithMeTime": null,
                "size": null,
                "spaces": null,
                "starred": null,
                "teamDriveId": null,
                "thumbnailLink": null,
                "thumbnailVersion": null,
                "trashed": null,
                "trashedTime": null,
                "version": null,
                "viewedByMe": null,
                "viewedByMeTime": null,
                "viewersCanCopyContent": null,
                "webContentLink": null,
                "webViewLink": null,
                "writersCanShare": null
              },
              "permission": {
                "allowFileDiscovery": false,
                "displayName": null,
                "domain": null,
                "emailAddress": null,
                "expirationTime": null,
                "id": "anyoneWithLink",
                "kind": "drive#permission",
                "photoLink": null,
                "role": "reader",
                "type": "anyone"
              }
            },
            "vendor": "GDRIVE",
            "status": "SUCCESS",
            "created_at": "2017-09-11 05:50:12",
            "updated_at": "2017-09-11 05:50:18"
          },
          {
            "id": 149,
            "upload_id": 50,
            "url": "https://www.dropbox.com/s/9iw2v8hg861mjl4/rbqoGlgu_Record93.mp4?dl=0",
            "json_response": {
              "error": null,
              "data": {
                "name": "rbqoGlgu_Record93.mp4",
                "path_lower": "/uploaded/rbqoglgu_record93.mp4",
                "path_display": "/UPLOADED/rbqoGlgu_Record93.mp4",
                "id": "id:B56VYtI6hBAAAAAAAAAAQg",
                "client_modified": "2017-09-11T05:50:19Z",
                "server_modified": "2017-09-11T05:50:19Z",
                "rev": "645603a328",
                "size": 1126301,
                "content_hash": "fe6a6c8a7cd570a7cb78f35a618804db46beb4ec8747006fbcd5576d02882791"
              },
              "permission": {
                ".tag": "file",
                "url": "https://www.dropbox.com/s/9iw2v8hg861mjl4/rbqoGlgu_Record93.mp4?dl=0",
                "id": "id:B56VYtI6hBAAAAAAAAAAQg",
                "name": "rbqoGlgu_Record93.mp4",
                "path_lower": "/uploaded/rbqoglgu_record93.mp4",
                "link_permissions": {
                  "resolved_visibility": {
                    ".tag": "public"
                  },
                  "requested_visibility": {
                    ".tag": "public"
                  },
                  "can_revoke": true
                },
                "client_modified": "2017-09-11T05:50:19Z",
                "server_modified": "2017-09-11T05:50:19Z",
                "rev": "645603a328",
                "size": 1126301
              }
            },
            "vendor": "DROPBOX",
            "status": "SUCCESS",
            "created_at": "2017-09-11 05:50:12",
            "updated_at": "2017-09-11 05:50:21"
          },
          {
            "id": 150,
            "upload_id": 50,
            "url": "https://1drv.ms/u/s!AgrfpxdLXL71gS8yGi6rWgRBxd85",
            "json_response": {
              "error": null,
              "data": {
                "@odata.context": "https://api.onedrive.com/v1.0/$metadata#drives('me')/items('F5BE5C4B17A7DF0A%2521105')/children/$entity",
                "@content.downloadUrl": "https://ijo5mw.dm2302.livefilestore.com/y4poJstwnfU-LwMm6bEV_ggkPk41PqlKiR1fCpDI50Xs-FmGIp90ev0mPHr56sk0LJhWqyTn3I1dSiAvBa22oL4YUNYCcBTqFcOkca1xseLS9y1qJEzwSISXiCU8A2KUn6oGiDO4jtAd86gcio_MqesFVphixNfhKHzZxDKOSHiRdnN4t-z4SyTvlegPCh17vKg33OL-Qbmv6XxopwzUvcoldwglbXm_EM2arePEoiT_iM",
                "createdBy": {
                  "application": {
                    "displayName": "Mirrorizer",
                    "id": "401de507"
                  },
                  "user": {
                    "displayName": "Muhamm Shidiq",
                    "id": "f5be5c4b17a7df0a"
                  }
                },
                "createdDateTime": "2017-09-11T05:50:28.06Z",
                "cTag": "aYzpGNUJFNUM0QjE3QTdERjBBITE3NS4yNTc",
                "eTag": "aRjVCRTVDNEIxN0E3REYwQSExNzUuMA",
                "id": "F5BE5C4B17A7DF0A!175",
                "lastModifiedBy": {
                  "application": {
                    "displayName": "Mirrorizer",
                    "id": "401de507"
                  },
                  "user": {
                    "displayName": "Muhamm Shidiq",
                    "id": "f5be5c4b17a7df0a"
                  }
                },
                "lastModifiedDateTime": "2017-09-11T05:50:28.06Z",
                "name": "rbqoGlgu_Record93.mp4",
                "parentReference": {
                  "driveId": "f5be5c4b17a7df0a",
                  "id": "F5BE5C4B17A7DF0A!105",
                  "name": "UPLOADED",
                  "path": "/drive/root:/UPLOADED"
                },
                "size": 1126301,
                "webUrl": "https://1drv.ms/i/s!AArfpxdLXL71gS8",
                "file": {
                  "hashes": {
                    "sha1Hash": "466503A357A1E689DB4C1A912C060F365AB16F9A"
                  },
                  "mimeType": "video/mp4",
                  "processingMetadata": true
                },
                "fileSystemInfo": {
                  "createdDateTime": "2017-09-11T05:50:28.06Z",
                  "lastModifiedDateTime": "2017-09-11T05:50:28.06Z"
                }
              },
              "permission": {
                "@odata.context": "https://api.onedrive.com/v1.0/$metadata#drives('me')/items('F5BE5C4B17A7DF0A%21175')/permissions/$entity",
                "id": "qFw9v5WNweuekv-jhy6XCYSWE0M",
                "link": {
                  "application": {
                    "id": "401de507"
                  },
                  "type": "view",
                  "webUrl": "https://1drv.ms/u/s!AgrfpxdLXL71gS8yGi6rWgRBxd85"
                },
                "roles": [
                  "read"
                ],
                "shareId": "s!AgrfpxdLXL71gS8yGi6rWgRBxd85",
                "expirationDateTime": "0001-01-01T00:00:00Z",
                "hasPassword": false
              }
            },
            "vendor": "ONEDRIVE",
            "status": "SUCCESS",
            "created_at": "2017-09-11 05:50:12",
            "updated_at": "2017-09-11 05:50:28"
          }
        ]
      }
  ];
  @observable data = [];

  async fetchData(path, option){
    this.isLoading = true;
    let resJSON = {error : true, message:"", result:[]}
    try{
      const response = await fetch(config.urlEndPoint+"/lists/"+path, option)
      resJSON = await response.json();
    }catch(err){
      resJSON.message = err.message;
    }
    ToastAndroid.show(resJSON.message, ToastAndroid.SHORT);
    this.isLoading = false;
    return resJSON;
  }

  validasiData(arrData, actionName){
    let result = {error : false, message:"", result:[]};
    for(key in arrData){
		  if(!arrData[key]){
        result = {error : true, message:"Data "+actionName+" belum lengkap", result:[]}
        break;
      }
	  }
    return result;
  }

  async list(token, page, parent_id, per_page){
    const unValidData = this.validasiData([token], 'List');
    if(unValidData.error){
      return unValidData;
    }
    const res = await this.fetchData(
      "?page="+page+"&parent_id="+parent_id+"&per_page="+per_page,
      {
        method : "GET",
        headers : {
          "token": token, "Content-Type": "application/json","Accept": "application/json"
        }
      }
    );
    console.log('getList', res);
    if(!res.error){
      this.dataShow = res.result.data;
    }
    return res;
  }

  async createDir(token, parent_id, name){
    const unValidData = this.validasiData([token, parent_id, name], 'Buat Folder');
    if(unValidData.error){
      return unValidData;
    }
    const res = await this.fetchData("directory", {
      method : "POST",
      headers : {"token": token, "Content-Type": "application/json","Accept": "application/json"},
      body : JSON.stringify({name : name, parent_id : parent_id})
    })
    return res;
  }

  async renameDir(token, dir_id, parent_id, name){
    const unValidData = this.validasiData([token, parent_id, name], 'Buat Folder');
    if(unValidData.error){
      return unValidData;
    }
    const res = await this.fetchData("directory/"+dir_id, {
      method : "POST",
      headers : {"token": token, "Content-Type": "application/json","Accept": "application/json"},
      body : JSON.stringify({name : name, parent_id : parent_id})
    })
    return res;
  }

  async removeDir(token, dir_id){
    const unValidData = this.validasiData([token, parent_id, name], 'Buat Folder');
    if(unValidData.error){
      return unValidData;
    }

    const res = await this.fetchData("directory/"+dir_id, {
      method : "DELETE",
      headers : {"token": token, "Content-Type": "application/json","Accept": "application/json"}
    })
    return res;
  }

}

const fileStore = new FileStore();
export default fileStore;
