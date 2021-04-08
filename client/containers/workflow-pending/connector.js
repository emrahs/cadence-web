// Copyright (c) 2021 Uber Technologies Inc.
//
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import { connect } from 'vuex-connect';
import {
  WORKFLOW_EXECUTION_IS_LOADING,
} from '../workflow/getter-types';
import { WORKFLOW_PENDING_FILTER_CHANGED } from './action-types';
import {
  WORKFLOW_PENDING_ACTIVE_FILTER,
  WORKFLOW_PENDING_ACTIVE_FILTER_EMPTY_MESSAGE,
  WORKFLOW_PENDING_ACTIVE_PENDING_TASK_LIST,
} from './getter-types';

const actionsToEvents = {
  filterChanged: WORKFLOW_PENDING_FILTER_CHANGED,
};

const gettersToProps = {
  emptyMessage: WORKFLOW_PENDING_ACTIVE_FILTER_EMPTY_MESSAGE,
  filter: WORKFLOW_PENDING_ACTIVE_FILTER,
  isLoading: WORKFLOW_EXECUTION_IS_LOADING,
  pendingTaskList: WORKFLOW_PENDING_ACTIVE_PENDING_TASK_LIST,
};

export default connect({
  actionsToEvents,
  gettersToProps,
});
