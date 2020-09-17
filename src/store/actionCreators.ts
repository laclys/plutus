import { Dispatch } from 'redux'
import * as constants from './constants'
import axios, { AxiosResponse } from 'axios'
import { message } from 'antd'
import { ListItem, Query, ResData } from '@/types/list'
import queryClean from '@/utils/query-clean'
import json2String from '@/utils/json2string'
import { STATUS_TYPE } from '@/const/async-status'

