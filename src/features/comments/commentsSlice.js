// This file will not find any components
//Use slice file will organize the logic for comments data

import { COMMENTS } from '../../app/shared/COMMENTS';
export const selectCommentsByCampsiteId = (campsiteId) => {
    return COMMENTS.filter((comment) => comment.campsiteId === parseInt(campsiteId))
}