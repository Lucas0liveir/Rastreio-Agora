import React from 'react';
import { EventsPackageStatus } from '../../dtos/EventsPackageStatus';
import dayjs from "dayjs";
import {
  Container,
  PackageDescription,
  ContainerStatus,
  ContainerDateInfo,
  Content,
  DateInfo,
  DateHourInfo,
  Title,
  PackageInfo,
  ContainerPackageInfo,
  PackageInfoWrapper,
  PackageDetail
} from './styles';
import { IconStatus } from '../IconStatus';
import { getTypeStatus } from '../../Utils/getTypeStatus';

interface Props {
  events: EventsPackageStatus
}

export function CardStatus({ events }: Props) {

  return (
    <Container>

      <ContainerDateInfo>
        <IconStatus type={getTypeStatus(events?.descricao)} />
        <DateInfo>
          {dayjs(events?.dtHrCriado).format('DD/MM/YYYY')}
        </DateInfo>
        <DateHourInfo>
          {dayjs(events?.dtHrCriado).format('HH:mm:ss')}
        </DateHourInfo>
      </ContainerDateInfo>
      <Content>
        <ContainerStatus>


          <PackageDescription
            type={String(events?.descricao).includes('entregue ao destinatário') ? 'sucess' : ''}
          >
            {events?.descricao}

          </PackageDescription>
          {events?.detalhe && (
            <PackageDetail>{events?.detalhe}</PackageDetail>
          )

          }
          {events?.unidadeDestino?.endereco.cidade && (
            <ContainerPackageInfo>
              <PackageInfoWrapper>
                <Title>De</Title>
                <PackageInfo>
                  {`${events?.unidade?.endereco.cidade} - ${events?.unidade?.endereco.uf}`}
                </PackageInfo>
              </PackageInfoWrapper>

              <PackageInfoWrapper>
                <Title>Para</Title>
                <PackageInfo>
                  {`${events?.unidadeDestino?.endereco.cidade} - ${events?.unidadeDestino?.endereco.uf}`}
                </PackageInfo>


              </PackageInfoWrapper>
              {events?.unidadeDestino?.tipo && (
                <PackageInfo>
                  {`${events?.unidadeDestino?.tipo}`}
                </PackageInfo>
              )

              }

            </ContainerPackageInfo>
          )}

          {events?.unidadeDestino && !events?.unidadeDestino?.endereco.cidade && (
            <ContainerPackageInfo>
              <PackageInfoWrapper>
                <Title>De</Title>
                <PackageInfo>
                  {`${events?.unidade?.tipo} - ${events?.unidade?.nome}`}
                </PackageInfo>
              </PackageInfoWrapper>

              <PackageInfoWrapper>
                <Title>Para</Title>
                <PackageInfo>
                  {`${events?.unidadeDestino?.nome} - ${events?.unidadeDestino?.endereco.uf}`}
                </PackageInfo>
              </PackageInfoWrapper>

            </ContainerPackageInfo>
          )
          }
          {!events?.unidadeDestino?.endereco && events?.unidade?.endereco.bairro ? (
            <PackageInfo>
              {`${events?.unidade?.endereco.cidade} - ${events?.unidade?.endereco.uf}`} {'\n'}
              {`${events?.unidade?.endereco.bairro} - ${events?.unidade?.endereco.logradouro}`}
            </PackageInfo>
          ) :

            !events?.unidadeDestino?.endereco && events?.unidade?.endereco.cidade && (

              <PackageInfo>
                {`${events?.unidade?.endereco.cidade} - ${events?.unidade?.endereco.uf}`}
              </PackageInfo>
            )
          }

          {!events?.unidadeDestino?.endereco && !events?.unidade?.endereco.cidade &&
            (
              <PackageInfo>
                {`${events?.unidade?.tipo} - ${events?.unidade?.nome}`}
              </PackageInfo>
            )


          }

        </ContainerStatus>

      </Content>
    </Container>
  );
}