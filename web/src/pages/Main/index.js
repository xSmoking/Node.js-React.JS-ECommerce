import React, { Component } from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import api from '../../services/api';

import { Container, Form, SubmitButton, Table } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
    repos: [],
  };

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { newRepo, repos } = this.state;
    const response = await api.get(`/repos/${newRepo}`);

    const data = {
      name: response.data.full_name,
    };

    this.setState({
      newRepo: '',
      repos: [...repos, data],
    });

    console.log(data);
  };

  render() {
    const { newRepo } = this.state;

    return (
      <Container>
        <h1>
          <FaGithubAlt /> Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar Repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />

          <SubmitButton>
            <FaPlus /> Adicionar
          </SubmitButton>
        </Form>

        <Table></Table>
      </Container>
    );
  }
}
