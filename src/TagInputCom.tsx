/**
 * @description: 输入后以多标签展示，标签可删除
 */
import React, {useEffect, useState} from "react";
import {Input, Tag} from 'antd';
import {PlusCircleOutlined} from '@ant-design/icons';
import {getCharSize} from "./utils";

interface PriceInputProps {
  value?: Array<string>;
  onChange?: (value: Array<string>) => void;
  id: string
}

const TagInputCom: React.FC<PriceInputProps> = ({value = [], onChange, id}) => {
  const [tags, setTags] = useState<Array<string>>([]) // finally
  const [inputValue, setInputValue] = useState<string>('')
  const [tipVisible, setTipVisible] = useState<boolean>(false)

  useEffect(() => {
    if (value.length) {
      setTags(value)
    }
  }, [value])

  const handleCloseTag = (removedTag: string, idx: number) => {
    let tagsShallow = tags
    tags.splice(idx, 1)
    setTags(tagsShallow)
    onChange?.(tags)
  };

  const changeInput = (e) => {
    if (tipVisible) {
      setTipVisible(false)
    }
    setInputValue(e.target.value)
  };

  const handleAddTag = () => {
    if (inputValue && getCharSize(inputValue) <= 16) {
      let tagsShallow = tags
      tagsShallow.push(inputValue)
      setTags(tagsShallow)
      setInputValue('')
      onChange?.(tags)
    } else {
      setTipVisible(true)
    }
  }

  return (
    <div id={id}>
      <Input
        value={inputValue}
        style={{marginBottom: 10}}
        onChange={changeInput}
        onPressEnter={handleAddTag}
        suffix={<PlusCircleOutlined onClick={handleAddTag} style={{color: 'red'}}/>}
      />
      {
        tags.map((item, idx) => {
          return (
            <Tag key={item} closable onClose={() => handleCloseTag(item, idx)}>{item}</Tag>
          )
        })
      }
      {
        tipVisible ? (
          <span style={{display: 'inline', color: 'red'}}>请输入不超过8个字，16个字符</span>
        ) : <div/>
      }
    </div>
  )
}

export default TagInputCom;