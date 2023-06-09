import * as React from 'react'
import styles from './FileList.module.scss'
import { FileWithPath } from 'react-dropzone'
import ImageIcon from '@mui/icons-material/Image'
import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { FileListComponent } from './types'

const FileList: FileListComponent = ({ acceptedFiles, removeFile }) => {
  const onClick = (filePath?: string) => () => {
    removeFile(filePath || '')
  }

  return (
    <aside className={styles.container}>
      <List className={styles.list}>
        {acceptedFiles.map((file: FileWithPath) => (
          <ListItem key={file.name} className={styles.item}>
            <ListItemAvatar className={styles.itemAvatar}>
              <Avatar className={styles.avatar}>
                <ImageIcon className={styles.icon} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText className={styles.itemText} secondary={file.name} />
            <IconButton className={styles.button} size={'small'} onClick={onClick(file.name)}>
              <DeleteIcon fontSize={'inherit'} className={styles.delete} />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </aside>
  )
}

export default FileList
